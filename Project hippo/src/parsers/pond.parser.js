import moment from 'moment';
import parseUserAgent from 'user-agent-parser';
import RootResult from '~/structs/RootResult';


const queryRegex = /^\/js\/[^\/]+\/action\/(view|basket|sale)\?(.*)$/;


export default function parse( text )
{
    const lines = text.split( '\n' ).filter( Boolean );
    return new RootResult( lines.map( parseLine ) );
}


function parseLine( line, index )
{
    const [ date, time, url, referer, ...userAgent ] = line.split( ' ' );
    const [ unused, type, query ] = queryRegex.exec( url );
    const parsedQuery = parseQuery( query );

    return (
    {
        date  : moment.utc( `${date} ${time}` ).unix(),
        adId  : parsedQuery.aid,
        fpc   : parsedQuery.fpc,
        tpc   : parsedQuery.tpc,
        rid   : parsedQuery.rid,
        agent : parseUserAgent( userAgent.join( ' ' ) ),
        url   : referer,
        type  : type,
        ...parseObjectJSON( parsedQuery, 'co' ),
        ...parseObjectJSON( parsedQuery, 'do' ),
        ...parseObjectJSON( parsedQuery, 'po' ),
        ...parseObjectJSON( parsedQuery, 'to' )
    } );
}


function parseObjectJSON( object, key )
{
    const json = object[ key ];
    if ( !json ) return null;
    try
    {
        return { [ key ] : JSON.parse( json ) };
    }
    catch ( error )
    {
        return null;
    }
}


function parseQuery( qstr )
{
    const query = {};
    const a = ( qstr[0] === '?' ? qstr.substr( 1 ) : qstr ).split( '&' );
    for ( let i = 0; i < a.length; i++ )
    {
        const b = a[ i ].split( '=' );
        query[ decodeURIComponent( b[ 0 ] ) ] = decodeURIComponent( b[ 1 ] || '' );
    }
    return query;
}
