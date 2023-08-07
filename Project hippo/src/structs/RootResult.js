import UserStory from './UserStory';
import CategoryListStat from '~/stats/CategoryListStat';
import NumericListStat from '~/stats/NumericListStat';
import UserEvent from '~/structs/UserEvent';

export default class RootResult
{
    constructor( items )
    {
        const userIds = getItemUserIds( items );
        const allEvents = _.chain( items )
            .map( ( item, index ) => new UserEvent(
            {
                ...item,
                userId : userIds[ index ]
            } ) )
            .sortBy( ev => ev.date )
            .value();

        const allValidEvents = allEvents.filter( ev => ev.isValidEvent );
        const allInvalidEvents = allEvents.filter( ev => !ev.isValidEvent );

        const userStories = _.chain( allValidEvents )
            .groupBy( 'userId' )
            .map( ( events, userId ) => new UserStory( userId, events ) )
            .value();

        const allProducts = _.chain( allEvents )
            .sortBy( ev => -ev.date )
            .map( ev => _.get( ev, 'po.products' ) )
            .flattenDeep()
            .filter( Boolean )
            .uniqBy( product => product.identifier )
            .map( product => [ product.identifier, product ] )
            .fromPairs()
            .value();

        const allCategories = _.chain( allEvents )
            .sortBy( ev => -ev.date )
            .map( ev => _.get( ev, 'co.category' ) )
            .flattenDeep()
            .filter( Boolean )
            .uniq()
            .value();

        this.allEvents = allEvents;
        this.allValidEvents = allValidEvents;
        this.allInvalidEvents = allInvalidEvents;
        this.userStories = userStories;
        this.allProducts = allProducts;
        this.allCategories = allCategories;

        this.customerStories = this.userStories.filter( story => story.isCustomer );
        this.bouncerStories = this.userStories.filter( story => !story.isCustomer );
    }

    getProductViewStat( { filterUser, filterSale, filterView, filterProduct } = {} )
    {
        const TRUE = () => true;
        filterUser = filterUser || TRUE;
        filterSale = filterSale || TRUE;
        filterView = filterView || TRUE;
        filterProduct = filterProduct || TRUE;

        const perUser = this.customerStories
            .filter( userStory => filterSale( userStory ) )
            .map( userStory => userStory.getProductViewStat(
            {
                filterView    : ( ev, saleStory ) =>
                    filterView( ev, saleStory, userStory ),
                filterProduct : ( product, ev, saleStory ) =>
                    filterProduct( product, ev, saleStory, userStory )
            } ) );

        const productViews = new CategoryListStat(
            _.flattenDeep( perUser.map( userStat => userStat.productViews.values ) ) );

        const productCounts = new NumericListStat(
            _.flattenDeep( perUser.map( userStat => userStat.productCounts.values ) ) );

        const productViewCounts = new NumericListStat(
            _.flattenDeep( perUser.map( userStat => userStat.productViewCounts.values ) ) );

        return {
            perUser,
            productViews,
            productCounts,
            productViewCounts
        };
    }
}


function getItemUserIds( items )
{
    const uniqueId = {};
    const tpc2fpc = {};

    items.forEach( ({ fpc, tpc }) =>
    {
        if ( fpc && tpc )
        {
            ( tpc2fpc[ tpc ] || ( tpc2fpc[ tpc ] = [] ) ).push( fpc );
        }
    } );

    return items.map( ({ fpc, tpc }) =>
    {
        if ( fpc ) return `f:${fpc}`;
        const fpcs = tpc2fpc[ fpc ];

        if ( !( fpcs && fpcs.length ) ) return `t:${tpc}`;
        return `f:${fpcs[ 0 ]}`;
    } );
}
