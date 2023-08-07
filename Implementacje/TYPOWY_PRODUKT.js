<script type="text/javascript">

    var product = {
        identifier: 'WAWORD1380196740',									// Unikalne ID (np. KOD_LOTNISKA + KOD_DESTYNACJI + Timestamp lotu)
        fn: 'Warszawa - Barcelona',										// Tytuł/nazwa
		description: '28.01.2014',										// Data wylotu
        category: ['Hiszpania','Barcelona','y2014', 'w05'],				// Kategoria ['Kraj Destynacji', 'Miasto', 'Rok', 'Tydzien']
		brand: 'Linie Lotnicze LOT',									// Linie lotnicze - lowest price one of the list
        price: '1619.00',  												// Cena promocyjna - lowest price from the matrix
        amount: '1899.00',  											// Oryginalna cena - make sure that both are taken from the same flight.
        currency: 'PLN', 												// Waluta
        url: 'http://XXXXX.XX/pl-PL/Select',							// URL do strony wyników wyszukania wybranej daty i lotu
        photo: 'http://XXXXX.XX/link/do/grafiki/barcelona.jpg',		// Grafika do kreacji - obrazek miasta destynacji
		date: 1380196740,												// Unix timestamp końca oferty
		valid: 1380160740												// Unix timestamp końca oferty minus 10h
    };

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