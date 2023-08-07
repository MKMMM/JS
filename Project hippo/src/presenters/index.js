import printMostPopularProducts from './mostPopularProducts';
import CategoryListStat from '../stats/CategoryListStat';
import printMostPopularCategories from './mostPopularCategory'

export default function printHtml( result )
{
    return `<h1><span class="blue">&lt;</span>Hippo<span class="blue">&gt;</span> <span class="blue">Report</pan></h1>
        <h1>It works</h1>

 <!--       
       ${
            result.userStories.map( story =>   
                '<table class="container"><tbody><tr>${ 0 }</tr><tbody> </table> '
            )
        }

-->

        <table class="container">
            <thead>
                <tr>
                    <th><h1>User Information</h1></th>
                    <th><h1></h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Users Found</td>
                    <td>${ result.userStories.length }</td>
                </tr>
                <tr>
                    <td>Customers Found</td>
                    <td>${ result.customerStories.length }</td>
                </tr>
            </tbody>
        </table>
        <table class="container">
        <thead>
            <tr>
                <th><h1>Category Information</h1></th>
                <th><h1></h1></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Number of unique categories</td>
                <td>${ result.allCategories.length }</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Top 10 Categories</td>
                <td>${ printMostPopularCategories(result) }</td>
            </tr>
        </tbody>
        </table>

        <table class="container">
        <thead>
            <tr>
                <th><h1>Product Information</h1></th>
                <th><h1></h1></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Most Popular Products</td>
                <td>${ printMostPopularProducts( result ) }</td>
            </tr>
        </tbody>
        </table>
`;
}