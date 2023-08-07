import moment from 'moment';
import SaleStory from './SaleStory';
import NumericListStat from '~/stats/NumericListStat';
import CategoryListStat from '~/stats/CategoryListStat';


export default class UserStory
{
    constructor( userId, events )
    {
        this.userId = userId;
        this.events = events;

        const hasSaleId = {};
        const saleStories = [];
        let buffer = [];
        this.events.forEach( ev =>
        {
            if ( ev.type === 'view' )
            {
                buffer.push( ev );
            }
            else if ( ev.type === 'sale' )
            {
                const transactionId = _.get( ev, 'to.transaction.transaction' );
                if ( !transactionId ) return;
                if ( hasSaleId[ transactionId ] ) return;
                saleStories.push( new SaleStory( userId, buffer, ev ) );
                buffer = [];
                hasSaleId[ transactionId ] = true;
            }
        } );

        this.saleStories = saleStories;
        this.isCustomer = this.events.find( ev => ev.type === 'sale' );
    }

    getProductViewStat( { filterSale, filterView, filterProduct } = {} )
    {
        const TRUE = () => true;
        filterSale = filterSale || TRUE;
        filterView = filterView || TRUE;
        filterProduct = filterProduct || TRUE;

        const perSale = this.saleStories
            .filter( saleStory => filterSale( saleStory ) )
            .map( saleStory => saleStory.getProductViewStat(
            {
                filterView    : ev => filterView( ev, saleStory ),
                filterProduct : ( product, ev ) => filterProduct( product, ev, saleStory )
            } ) );

        const productViews = new CategoryListStat(
            _.flattenDeep( perSale.map( saleStat => saleStat.productViews.values ) ) );

        const productCounts = new NumericListStat(
            _.flattenDeep( perSale.map( saleStat => saleStat.productCounts.values ) ) );

        const productViewCounts = new NumericListStat(
            _.flattenDeep( perSale.map( saleStat => saleStat.productViewCounts.values ) ) );

        return {
            perSale,
            productViews,
            productCounts,
            productViewCounts
        };
    }

    toString()
    {
        return this.events.map( ev =>
        {
            const date = moment.unix( ev.date ).format( 'YYYY-MM-DD HH:mm:ss' );
            if ( ev.type === 'view' ) return `${date} viewed ${ev.viewType} at ${ev.url}`;
            if ( ev.type === 'basket' ) return `${date} basket: ${
                 ev.po && ev.po.products.length }`;
            if ( ev.type === 'sale' ) return `${date} sale: ${
                ev.to.transaction.currency} ${ev.to.transaction.amount} ${
                ev.po ? `(${ ev.po.products.length } products)` : '' }`;
        } ).join( '\n' );
    }
}
