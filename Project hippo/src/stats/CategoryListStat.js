import jstat from 'jstat';


export default class CategoryListStat
{
    constructor( values )
    {
        this.values = [ ...values ].sort();
        this.unique = _.uniq( values );
        this.counts = _.countBy( values );
        this.modes = _.chain( this.counts )
            .keys()
            .sortBy( key => -this.counts[ key ] )
            .value();
    }

    toString()
    {
        return `size:         ${this.values.length}\n` +
               `unique size:  ${this.unique.length}\n` +
               `most popular:\n` +
                this.modes.slice( 0, 10 )
                    .map( value => `    "${value}" (${this.counts[ value ]})` )
                    .join( '\n' );
    }
}
