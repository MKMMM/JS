=============================================================
STEP1:
=============================================================
<script type="text/javascript">
  var product = {
    category: ['OD'+{{MU_Departure}}, 'DO'+{{MU_Arrival}}, {{WeekNr_wylot}}],     // 'Lotnisko Wylotu', 'Lotnisko Przylotu', 'data wylotu', 'data powrotu'] 
    date: '{{DataEpoch_wylot}}'                                       // Data wylotu
};
</script>

<script type="text/javascript">
    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/XXXX-XX';
        x.parentNode.insertBefore( s, x );
    })();
</script>
=============================================================

=============================================================
STEP3:
=============================================================
<script type="text/javascript">
 
	var depDay = String({{MU_DepartureDate}}.replace (/-/g,'')).substring(6,8);
	var depMo = String({{MU_DepartureDate}}.replace (/-/g,'')).substring(4,6);
	var depYear = String({{MU_DepartureDate}}.replace (/-/g,'')).substring(0, 4);
	var depdate_conv = depDay + depMo + depYear;

	var data1 = {{MU_DepartureDate}};
	var dat1 = data1.split("-");
	var da1 = new Date(dat1[0],dat1[1]-1,dat1[2]).getTime()/1000;
		date1 = da1;

	function ConvertToWeek(  ) { 

		 var epoch = date1;               
		 var d = new Date(epoch *  1000);
		 var target  = new Date(d.valueOf());  
		 var dayNr   = (d.getDay() + 6) % 7;  
		 target.setDate(target.getDate() - dayNr + 3);  
		 var jan4    = new Date(target.getFullYear(), 0, 4);  

		 var dayDiff = (target - jan4) / 86400000;    
		 var weekNr_return = 1 + Math.ceil(dayDiff / 7);    

		 return weekNr_return;    

	}

    var product = {
      identifier: 'OD'+{{MU_Departure}}+'_'+'DO'+{{MU_Arrival}}+'_'+'OD'+date1+'_'+{{MU_PassangersTotal}},			// LotniskoWylotu_LotniskoDestynacji_DataWylotu_DataPowrotu_LiczbaOsob
        fn: {{ZmiennaTablicowa_Miasta_Wylot}}+' - '+{{ZmiennaTablicowa_Miasta}},								// Nazwa oferty
        description: '{{MU_DepartureDate}}',						// Data wylotu
        category: ['OD'+'{{MU_Departure}}', 'DO'+'{{MU_Arrival}}', ConvertToWeek()],	// Kategoria - lista 'Lotnisko Wylotu', 
        brand: '{{MU_PassangersTotal}}'+' '+'{{koncowka_osobowa}}',
		price: '{{CalcValToPLN}}',
		amount: '{{CalcValToPLN}}',
        currency: 'PLN',
        url: 'https://bookerproxy.lot.com/?COUNTRY_CODE=PL&LANGUAGE_CODE=pl&ORIGIN={{MU_Departure}}&DESTINATION={{MU_Arrival}}&DEPARTURE_DATE='+depdate_conv+'&ARRIVAL_DATE='+retdate_conv+'&ADULT_COUNT={{MU_PassangersTotal}}',
        photo: {{dynamic_banners}},
		valid: date1,									// Data wylotu
		date: date1 - 18000								// Data wylotu minus 5h
    };
</script>

<script type="text/javascript">
    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/XXXX-XX';
        x.parentNode.insertBefore( s, x );
    })();
</script>
=============================================================

=============================================================
STEP6:
=============================================================
<script type="text/javascript">

	var date1;
	var date2;
 
	var data1 = {{MU_DepartureDate}};
	var dat1 = data1.split("-");
	var da1 = new Date(dat1[0],dat1[1]-1,dat1[2]).getTime()/1000;
	date1 = da1;

</script>

<script type="text/javascript">
    var basket = {
        products: [
            { identifier: 'OD'+{{MU_Departure}}+'_'+'DO'+{{MU_Arrival}}+'_'+'OD'+date1+'_'+{{MU_PassangersTotal}}, amount: {{CalcValToPLN}}, currency: 'PLN', quantity: {{MU_PassangersTotal}} }
        ]
    };
</script>

<script type="text/javascript">
    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/XXXX-XX';
        x.parentNode.insertBefore( s, x );
    })();
</script>
=============================================================

=============================================================
STEP_ConfPage:
=============================================================
<script type="text/javascript">

var date1;
var date2;

 var data1 = {{MU_DepartureDate}};
 var dat1 = data1.split("-");
 var da1 = new Date(dat1[0],dat1[1]-1,dat1[2]).getTime()/1000;
    date1 = da1;

</script>

<script type="text/javascript">
	if( document.cookie.indexOf('utmcsr=L76b4dvh') >= 0 ){
		var sale =
		{
		confirmed: true
		};
	}
</script>

<script type="text/javascript">
    var basket = {
        products: [
            { identifier: 'OD'+{{MU_Departure}}+'_'+'DO'+{{MU_Arrival}}+'_'+'OD'+date1+'_'+{{MU_PassangersTotal}}, amount: {{CalcValToPLN}}, currency: 'PLN', quantity: {{MU_PassangersTotal}}}
             ],
             transaction : '{{MU_PNRNumber}}',
        amount: '{{CalcValToPLN}}',
        currency: 'PLN'
    };
</script>

<script type="text/javascript">
    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/XXXX-XX';
        x.parentNode.insertBefore( s, x );
    })();
</script>
