import jstat from 'jstat';


export default class NumericListStat
{
    constructor( values )
    {
        this.values = [ ...values ].sort();
        this.mean = jstat.mean( values );
        this.median = jstat.median( values );
        this.stdev = jstat.stdev( values );
    }

    toString()
    {
        return `mean:   ${this.mean.toFixed( 2 )}\n` +
               `median: ${this.median.toFixed( 2 )}\n` +
               `stdev:  ${this.stdev.toFixed( 2 )}\n` +
               `size:   ${this.values.length}`;
    }
}
