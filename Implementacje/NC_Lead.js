<script type="text/javascript">
function makeid()
{
    var Lead_ID = "";
    var possible = "0123456789abcdefghijklmnoprstxyzABCDEFGHIJKLMNOPRSTUWXYZ";

    for( var i=0; i < 10; i++ )
        Lead_ID += possible.charAt(Math.floor(Math.random() * possible.length));

    return Lead_ID;
}
</script>

<script type="text/javascript">
var showLead = function()
{

sociomantic.sonar.adv['XXXXXX-XX'].clear();
window.lead = { 
        transaction: makeid()
    }; 
sociomantic.sonar.adv['XXXXXX-XX'].track();
};
document.getElementById('order-button').onclick = showLead;
</script>

<script type="text/javascript">
    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/XXXXXX-XX';
        x.parentNode.insertBefore( s, x );
    })();
</script>