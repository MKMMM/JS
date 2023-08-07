import CategoryListStat from '~/stats/CategoryListStat';
import NumericListStat from '~/stats/NumericListStat';


export default class SaleStory
{
    constructor( userId, viewEvents, saleEvent )
    {
        this.userId = userId;
        this.viewEvents = viewEvents;
        this.saleEvent = saleEvent;
    }

    getProductViewStat( { filterProduct, filterView } = {} )
    {
        const TRUE = () => true;
        filterView = filterView || TRUE;
        filterProduct = filterProduct || TRUE;

        const productViews = new CategoryListStat( _.chain( this.viewEvents )
            .filter( ev => ev.viewType === 'product' )
            .filter( ev => filterView( ev ) )
            .map( ev => ev.po.products
                .filter( product => filterProduct( product, ev ) )
                .map( product => product.identifier ) )
            .flattenDeep()
            .value() );

        const productCounts = new NumericListStat( [ productViews.unique.length ] );
        const productViewCounts = new NumericListStat( [ productViews.values.length ] );
        return {
            productViews,
            productCounts,
            productViewCounts
        };
    }
}
