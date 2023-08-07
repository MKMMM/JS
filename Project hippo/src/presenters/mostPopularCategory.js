export default function printMostPopularCategories( result )
{
    const categoryViewStat = result.allCategories;
    return categoryViewStat.slice( 0, 10 )
        .map( category => 
        {
            return `<p>Category: ${category}</p>`;
        } )
        .join( '' );
}