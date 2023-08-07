export default class UserEvent
{
    constructor( data )
    {
        Object.assign( this, data );
        this.isValidEvent = isValidEvent( this );
        this.viewType = getViewType( this );
    }
}


function isValidEvent( ev )
{
    if ( ev.type === 'view' )
    {
        return true;
    }
    else if ( ev.type === 'basket' )
    {
        return Boolean( _.get( ev, 'po.products' ) );
    }
    else if ( ev.type === 'sale' )
    {
        return Boolean( _.get( ev, 'to.transaction.transaction' ) );
    }
    return false;
}


function getViewType( ev )
{
    if ( ev.type !== 'view' ) return null;
    if ( ev.po ) return 'product';
    if ( ev.co ) return 'category';
    if ( ev.do ) return 'customer';
    return 'homepage';
}
