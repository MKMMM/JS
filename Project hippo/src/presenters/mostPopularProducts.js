export default function printMostPopularProducts( result )
{
    const productViewStat = result.getProductViewStat().productViews;
    return productViewStat.modes.slice( 0, 10 )
        .map( productId => 
        {
            const count = productViewStat.counts[ productId ];
            return `<p>product ID: ${productId} seen ${count} time(s).</p>`;
        } )
        .join( '' );
}