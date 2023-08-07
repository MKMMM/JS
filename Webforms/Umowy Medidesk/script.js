document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event triggered");
  
    function generateFile(event) {
      console.log("Generate file function called");
      event.preventDefault();
  
      const form = document.getElementById('regulaminForm');
      console.log(form); // Check if the form element is correctly retrieved
  
      // Retrieve form field values
      const field1 = document.getElementById('dataZawarcia').value;
      const field2 = document.getElementById('nazwaKlienta').value;
      const field3 = document.getElementById('siedzibaFirmy').value;
      const field4 = document.getElementById('ulica').value;
      const field5 = document.getElementById('kodPocztowy').value;
      const field6 = document.getElementById('miasto').value;
      const field7 = document.getElementById('numerKRS').value;
      const field8 = document.getElementById('nip').value;
      const field9 = document.getElementById('regon').value;
      const field10 = document.getElementById('terminWdrozenia').value;
      const field11 = document.getElementById('zaliczka').value;
      const field12 = document.getElementById('kwotaAbonamentu').value;
      const field13 = document.getElementById('adresDoFaktur').value;
  
      const template = `<!DOCTYPE html><html><body><p><strong>UMOWA NA APLIKACJĘ MEDIDESK</strong></p>
      <p>&nbsp;</p>
      <p>zawarta w dniu <strong>${field1}</strong> w Warszawie pomiędzy:</p>
      <p><strong>Medidesk sp&oacute;łka z ograniczon</strong><strong>ą</strong><strong> odpowiedzialnością</strong> z siedzibą w Warszawie (01-570), przy ul. Niegolewskiego 17 lok. 2, wpisaną do Rejestru Przedsiębiorc&oacute;w Krajowego Rejestru Sądowego w Warszawie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS: 0000659580, NIP: 701-065-95-20, REGON: 366382110, o kapitale zakładowym w wysokości 100.000,00 zł, reprezentowaną przez Pana Daniela Nowocina &ndash; Prezesa Zarządu,</p>
      <p>zwaną dalej <strong>&bdquo;Usługodawcą&rdquo;</strong>,</p>
      <p>a</p>
      <p><strong>${field2} </strong>z siedzibą w<strong> ${field3}</strong>, adres: przy ul. ${field4}, -${field5} ${field6}, wpisaną do Rejestru Przedsiębiorc&oacute;w Krajowego Rejestru Sądowego pod numerem KRS ${field7}, NIP ${field8}, REGON ${field9}, reprezentowaną przez ________________,</p>
      <p>&nbsp;</p>
      <p>zwaną dalej <strong>&bdquo;Usługobiorcą&rdquo;</strong></p>
      <p>&nbsp;</p>
      <p>zwanymi r&oacute;wnież łącznie <strong>&bdquo;Stronami&rdquo;</strong>.</p>
      <p>&nbsp;</p>
      <p>Strony ustalają, co następuje:</p>
      <table width="99%">
      <tbody>
      <tr>
      <td width="100%">
      <p><strong>&sect; 1</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Postanowienia wstępne</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Og&oacute;lne Warunki Świadczenia Usług (OWU) stanowią integralną część niniejszej Umowy i zachowują moc, o ile nie są sprzeczne z&nbsp;jej poszczeg&oacute;lnymi postanowieniami.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wszelkie wyrażenia zdefiniowane w OWU znajdują zastosowanie r&oacute;wnież do Umowy.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca oświadcza, że otrzymał od Usługodawcy OWU przed zawarciem Umowy i akceptuje postanowienia w nich zawarte.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&nbsp;</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&sect; 2</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Przedmiot Umowy</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Na podstawie niniejszej Umowy, Usługodawca zobowiązuje się do świadczenia na rzecz Usługobiorcy Usług, o kt&oacute;rych mowa w OWU na warunkach i zasadach w&nbsp;nich określonych oraz zgodnie z niniejszą Umową, w tym w szczeg&oacute;lności:</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; zapewnienia Usługobiorcy dostępu do Aplikacji oraz jej poprawnego działania z uwzględnieniem założeń przyjętych w&nbsp;Kosztorysie stanowiącym załącznik nr 1 do niniejszej Umowy,</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dokonywania Aktualizacji Aplikacji,</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; zapewnienia Opieki serwisowej,</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; udzielenia licencji na korzystanie z Aplikacji.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca zobowiązuje się do uiszczenia na rzecz Usługodawcy wynagrodzenia i opłat związanych z realizacją Wdrożenia, comiesięcznego uiszczania Abonamentu,&nbsp; korzystania z Usług, w&nbsp;tym Aplikacji, na warunkach i zasadach określonych w&nbsp;OWU oraz zgodnie z niniejszą Umową, a także do wywiązywania się z innych obowiązk&oacute;w przewidzianych w OWU.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&nbsp;</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&nbsp;</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&sect; 3</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Termin Wdrożenia oraz uruchomienia Aplikacji</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Strony zgodnie ustalają następujące terminy Wdrożenia oraz Uruchomienia Aplikacji:</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Planowany Termin Wdrożenia: ${field10};</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Planowany Termin Uruchomienia Aplikacji: ${field10}.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługodawca nie ponosi odpowiedzialności za wydłużenie terminu uruchomienia usług, jeżeli op&oacute;źnienia w realizacji powstały z przyczyn od niego niezależnych lub leżących po stronie Usługobiorcy.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&nbsp;</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&sect; 4</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Opłata za wdrożenie</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca zobowiązany jest do uiszczenia na rzecz Usługodawcy, zaliczki stanowiącej 50% łącznej sumy wynagrodzenia i opłat związanych z realizacją Wdrożenia ustalonych w Kosztorysie, tj. kwoty ${field11} zł netto + VAT, w&nbsp;terminie 7 dni od dnia zawarcia Umowy, na rachunek bankowy Usługodawcy <strong>57&nbsp;1140 2004 0000 3902 7726 6412</strong>, na potwierdzenie czego Usługodawca zobowiązany jest niezwłocznie przekazać Usługobiorcy fakturę zaliczkową.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pozostała część wynagrodzenia i opłat związanych z realizacją Wdrożenia wskazana w Kosztorysie, po odliczeniu zaliczki wskazanej w ust. &sect; 4 ust. 1 Umowy, tj. kwota ${field11} zł , płatna będzie przez Usługobiorcę w&nbsp;terminie 7 dni od dnia wykonania Wdrożenia, na rachunek bankowy Usługodawcy wskazany w ust. 1 powyżej, na podstawie faktury VAT przekazanej Usługobiorcy przez Usługodawcę.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Strony zgodnie ustalają, że ostateczna wysokość wynagrodzenia i opłat związanych z realizacją Wdrożenia może ulec podwyższeniu, w przypadku zgłoszenia przez Usługobiorcę chęci rozszerzenia Usług Abonamentowych, kt&oacute;re mają zostać Wdrożone o dodatkowe Konta Użytkownika i/lub zakup aparat&oacute;w telefonicznych, o kwoty wskazane w Kosztorysie. W celu rozszerzenia usług podlegających Wdrożeniu, Usługobiorca zobowiązany jest potwierdzić wobec Usługodawcy chęć ich wdrożenia w formie mailowej, na adres e-mail: wdrozenia@medidesk.com Rozszerzenie usług podlegających Wdrożeniu nie stanowi zmiany Umowy i nie wymaga dla swej ważności zachowania formy pisemnej.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&nbsp;</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&sect; 5</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Abonament</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca zobowiązany jest do uiszczania na rzecz Usługodawcy - począwszy od dnia Uruchomienia Aplikacji &ndash; comiesięcznego Abonamentu, płatnego po upływie każdego miesiąca obowiązywania Umowy, w terminie do dnia 10-go kolejnego miesiąca, w wysokości określonej w Kosztorysie, tj. ${field12} zł netto miesięcznie + VAT, na podstawie faktury VAT przekazanej Usługobiorcy przez Usługodawcę i na wskazany w niej rachunek bankowy.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Strony zgodnie ustalają, że wysokość miesięcznego Abonamentu może ulec podwyższeniu, w przypadku zgłoszenia przez Usługobiorcę chęci rozszerzenia Usług Abonamentowych o dodatkowe Konta Użytkownika, o kwoty wskazane w Kosztorysie. W celu rozszerzenia Usług Abonamentowych Usługobiorca zobowiązany jest potwierdzić wobec Usługodawcy chęć ich wdrożenia w formie mailowej, na adres e-mail: wdrozenia@medidesk.com Rozszerzenie Usług Abonamentowych nie stanowi zmiany Umowy i nie wymaga dla swej ważności zachowania formy pisemnej.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W przypadku gdy Uruchomienie Aplikacji nastąpi w trakcie trwania miesiąca kalendarzowego, wysokość Abonamentu zostanie za ten miesiąc proporcjonalnie obniżona o ilość dni poprzedzających dzień Uruchomienia Aplikacji.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>&nbsp;</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&sect;</strong><strong> 6</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Okres obowiązywania, wypowiedzenie i odstąpienie od Umowy</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Umowa zawierana jest na czas nieokreślony.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Każdej ze Stron przysługuje prawo wypowiedzenia Umowy, z&nbsp;zachowaniem trzy miesięcznego okresu wypowiedzenia, ze skutkiem na koniec miesiąca następującego po miesiącu, w kt&oacute;rym oświadczenie o wypowiedzeniu Umowy zostało złożone drugiej Stronie.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługodawcy przysługuje prawo rozwiązania Umowy ze skutkiem natychmiastowym w przypadku, gdy:</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca zalega z płatnością Abonamentu powyżej 30 dni, pod warunkiem wyznaczenia Usługobiorcy dodatkowego 7 dniowego terminu na dokonanie płatności, w formie pisemnej lub mailowej, poprzez wysłanie wezwana na adres e-mail wskazany przez Usługobiorcę do doręczeń faktur VAT, o kt&oacute;rym mowa w &sect; 8 ust. 1 Umowy&nbsp; i nieuregulowania przez Usługobiorcę należności w tym terminie;</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca uniemożliwia Usługodawcy wykonanie Wdrożenia, poprzez nieudostępnienie swojej infrastruktury technicznej niezbędnej do jej wykonania, po wyznaczeniu Usługobiorcy dodatkowego 7-dniowego terminu, w kt&oacute;rym Usługobiorca powinien umożliwić Usługodawcy wykonanie Wdrożenia;</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; w ramach odrębnej umowy powierzenia przetwarzania danych osobowych zawartej pomiędzy Stronami w związku ze świadczeniem Usług, Usługobiorca zgłosił sprzeciw wobec dalszego powierzenia przetwarzania danych osobowych przez Usługodawcę wskazanemu przez niego podmiotowi, w przypadku gdy nie jest możliwe dalsze świadczenie Usług bez pod powierzenia danych do podmiotu, kt&oacute;rego dotyczył sprzeciw;</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca przy zawieraniu Umowy podał niezgodne z&nbsp;prawdą informacje niezbędne do uruchomienia Aplikacji, w tym nieprawdziwe dane osobowe Użytkownik&oacute;w.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>4.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Każdej ze Stron przysługuje prawo odstąpienia od Umowy, w terminie miesiąca od jej zawarcia, w przypadku niespełnienia warunk&oacute;w technicznych po stronie Usługobiorcy, skutkujących brakiem możliwości Wdrożenia Aplikacji, bez ponoszenia jakichkolwiek koszt&oacute;w przez kt&oacute;rąkolwiek ze Stron.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Oświadczenie o wypowiedzeniu Umowy lub odstąpieniu od Umowy powinno zostać złożone w formie pisemnej, pod rygorem nieważności.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&nbsp;</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&sect; 7</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Opieka serwisowa</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W okresie obowiązywania Umowy Usługobiorcy zostaje zapewniona Opieka serwisowa przez kt&oacute;rą należy rozumieć wsparcie doradcze oraz techniczne mające na celu zapewnienie poprawnego działania Aplikacji, w tym w szczeg&oacute;lności w przypadku wystąpienia błędu krytycznego lub usterki, a także wsparcie w zakresie prawidłowego działania dostarczonej przez Usługodawcę infrastruktury technicznej, w tym aparat&oacute;w telefonicznych, pod kątem jej prawidłowej konfiguracji oraz parametryzacji zapewniającej poprawne działanie Aplikacji.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Przez błąd krytyczny Strony rozumieją błąd Aplikacji, kt&oacute;rego skutkiem jest zatrzymanie pracy Aplikacji całkowicie uniemożliwiające korzystanie z jej Funkcjonalności lub istotne zakł&oacute;cenie pracy kluczowych Funkcjonalności Aplikacji, wiążące się z wystąpieniem co najmniej jednej z następujących sytuacji: brak odczytu/zapisu z bazy danych, utrata danych lub ich sp&oacute;jności, brak możliwości zalogowania Użytkownika nie wynikający z użycia niepoprawnych danych do logowania (dalej: <strong>Błąd Krytyczny</strong>), natomiast przez usterkę Strony rozumieją inny błąd utrudniający korzystanie z Aplikacji zgodnie z jej przeznaczeniem (dalej: <strong>Usterka</strong>).</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Opieka serwisowa realizowana jest przez Usługodawcę zdalnie, przy wykorzystaniu telefonu, poczty elektronicznej, narzędzi do zdalnego dostępu oraz za pośrednictwem Aplikacji. W przypadku braku możliwości zrealizowania Opieki serwisowej w spos&oacute;b zdalny, Usługodawca zobowiązany jest udać się do miejsca, w&nbsp;kt&oacute;rym wykonane zostało Wdrożenie Aplikacji.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługodawca zobowiązany jest do przechowywania w okresie obowiązywania Umowy kopii zapasowej zbior&oacute;w danych zawartych w Aplikacji, w celu zapobiegnięcia utracie danych wprowadzonych przez Usługobiorcę w ramach korzystania z&nbsp;Aplikacji.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W celu skorzystania z Opieki serwisowej Usługobiorca powinien zgłosić taką potrzebę telefonicznie pod numerem telefonu wskazanym na stronie medidesk.pl/kontakt (pomoc techniczna) lub mailowo na adres: pomoc@medidesk.pl.&nbsp; Usługobiorca ma możliwość zgłaszania uwag i propozycji modyfikacji Aplikacji w&nbsp;spos&oacute;b wskazany w zdaniu poprzedzającym, jak r&oacute;wnież w&nbsp;formie pisemnej.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dokonanie zgłoszenia przez Usługobiorcę w ramach Opieki serwisowej zostanie potwierdzone przez Usługodawcę w formie mailowej lub telefonicznej, na adres e-mail, numer telefonu Usługobiorcy, za pośrednictwem kt&oacute;rego dokonano zgłoszenia lub na inny adres e-mail/numer telefonu wskazany przez Usługobiorcę.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Zgłaszając wystąpienie Usterki lub Błędu Krytycznego, Usługobiorca powinien szczeg&oacute;łowo opisać problem składający się na Usterkę lub Błąd Krytyczny oraz podać wszystkie okoliczności, kt&oacute;re mogłyby okazać się niezbędne do ich zdiagnozowania oraz usunięcia przez Usługodawcę.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca zobowiązany jest wsp&oacute;łpracować z Usługodawcą w celu umożliwienia mu prawidłowej realizacji Opieki serwisowej, w tym udzielać dodatkowych informacji oraz wyjaśnień, kt&oacute;re mogą okazać się niezbędne dla Usługodawcy.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Czas reakcji, przez kt&oacute;ry należy rozumieć podjęcie przez Usługodawcę działań zmierzających do zdiagnozowania i usunięcia Usterki lub Błędu krytycznego, licząc od momentu zgłoszenia przez Usługobiorcę ich wystąpienia, pod warunkiem dokonania zgłoszenia w Dni robocze w godzinach od 8:00 do 18:00 lub w&nbsp;sobotę (z wyłączeniem dni ustawowo wolnych od pracy) w&nbsp;godzinach od 9:00 do 13:00, wynosi maksymalnie:</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 godziny &ndash; w przypadku zgłoszenia Błędu krytycznego;</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 48 godzin &ndash; w przypadku zgłoszenia Usterki.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>10.&nbsp;&nbsp;&nbsp; Czas naprawy, przez kt&oacute;ry należy rozumieć usunięcie Usterki lub Błędu krytycznego, licząc od momentu podjęcia reakcji, o kt&oacute;rej mowa w &sect; 7 ust. 9 Umowy, wynosi maksymalnie:</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 godzin &ndash; w przypadku zgłoszenia Błędu krytycznego;</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 72 godziny &ndash; w przypadku zgłoszenia Usterki.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>11.&nbsp;&nbsp;&nbsp; W przypadku konieczności udania się przez Usługodawcę do Usługobiorcy w celu usunięcia Usterki lub Błędu krytycznego, czas naprawy wskazany w &sect; 7 ust. 10 Umowy może ulec wydłużeniu i wynosić będzie maksymalnie:</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16 godzin &ndash; w przypadku zgłoszenia Błędu krytycznego;</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 96 godzin - w przypadku zgłoszenia Usterki.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>12.&nbsp;&nbsp;&nbsp; Wsparcie doradcze oraz techniczne Usługobiorcy w&nbsp;ramach sprawowanej Opieki serwisowej, inne niż wynikające z&nbsp;wystąpienia Usterki lub Błędu Krytycznego, realizowane jest w&nbsp;dni oraz w godzinach wskazanych w ust. 9 powyżej.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&nbsp;</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>&sect;</strong><strong> 8</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p><strong>Postanowienia końcowe</strong></p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Usługobiorca wyraża zgodę na doręczanie przez Usługodawcę wszelkich faktur, o kt&oacute;rych mowa w Umowie, w formie elektronicznej, na adres e-mail: ${field13}.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Za moment zapłaty przez Usługobiorcę wszelkich należności wynikających z Umowy uważa się dzień uznania rachunku bankowego Usługodawcy.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wszelkie zmiany, uzupełnienia i rozwiązanie Umowy oraz odstąpienie od niej, wymagają dla swej ważności formy pisemnej pod rygorem nieważności.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Załączniki do Umowy stanowią jej integralną część.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W sprawach nie uregulowanych w niniejszej Umowie lub OWU, mają zastosowanie powszechnie obowiązujące przepisy prawa polskiego, w szczeg&oacute;lności Kodeksu cywilnego.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W przypadku jakichkolwiek spor&oacute;w wynikłych na tle niniejszej Umowy, Strony dołożą wszelkich starań, aby sp&oacute;r rozstrzygnąć polubownie, jednakże w przypadku braku możliwości polubownego rozstrzygnięcia sporu, Strony zgodnie ustalają, że właściwym miejscowo do jego rozstrzygnięcia będzie sąd właściwy dla siedziby Usługodawcy.</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Umowa została sporządzona w dw&oacute;ch egzemplarzach, po jednym dla każdej ze Stron.</p>
      </td>
      </tr>
      </tbody>
      </table>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <table width="99%">
      <tbody>
      <tr>
      <td width="100%">
      <p>_________________________________</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>Usługodawca</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>_________________________________</p>
      </td>
      </tr>
      <tr>
      <td width="100%">
      <p>Usługobiorca</p>
      </td>
      </tr>
      </tbody>
      </table>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>Załączniki:</p>
      <ul>
      <li>Załącznik nr 1 &ndash; Kosztorys;</li>
      </ul>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <table width="691">
      <tbody>
      <tr>
      <td width="18">
      <p>&nbsp;</p>
      </td>
      <td width="18">
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      </td>
      <td width="18">
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      </td>
      <td width="16">
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      </td>
      <td width="49">
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>TAK</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>NIE</p>
      </td>
      <td width="355">
      <p>Usługobiorca wyraża zgodę na nieodpłatne używanie jego firmy (nazwy) oraz logo jego firmy (znaku graficznego/towarowego) przez Usługodawcę, w celu umożliwienia Usługodawcy informowania o świadczeniu usług Aplikacji Medidesk na rzecz Usługobiorcy w ramach promocji Aplikacji Medidesk, w tym na stronie internetowej, portalach społecznościowych, broszurach, plakatach, ofertach, portfolio i innych papierowych oraz elektronicznych materiałach promocyjnych.</p>
      <p>&nbsp;</p>
      <p>Firma (nazwa) oraz logo (znak graficzny/towarowy) Usługobiorcy nie będą wykorzystywane przez Usługodawcę w żadnym innym celu, poza wskazanym powyżej, a Usługodawca nie jest uprawniony do ujawniania żadnych innych informacji dotyczących Usługobiorcy, poza tym, że świadczy na rzecz Usługobiorcy usługę Aplikacji Medidesk.</p>
      </td>
      <td width="218">
      <p>&nbsp;</p>
      <p>Podpis Usługobiorcy:</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>______________________________</p>
      <p>[Imię i nazwisko] &ndash; [Prezes Zarządu/Członek Zarządu/Inna pełniona funkcja]</p>
      <p>&nbsp;</p>
      </td>
      </tr>
      </tbody>
      </table>
      <p>&nbsp;</p></body></html>`;
  
      // Generate file and trigger download
      const blob = new Blob([template], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'regulamin.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      }

      const form = document.getElementById('regulaminForm');
      console.log(form); // Check if the form element is correctly retrieved
      form.addEventListener('submit', generateFile);
});