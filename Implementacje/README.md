# Product Data Scraping Tags for Programmatic Campaigns

This markdown file provides an overview of the tags used for scraping product and related information for programmatic campaigns. Each set of scripts represents a different step in the campaign creation and execution process.

---

## **STEP1: Initial Product Data**
Extract basic product information like category and date.

```javascript
<script type="text/javascript">
  var product = {
    category: ['OD'+{{MU_Departure}}, 'DO'+{{MU_Arrival}}, {{WeekNr_wylot}}],
    date: '{{DataEpoch_wylot}}'
};
</script>
...
```

---

## **STEP3: Detailed Product Data**
Convert date formats, set up product details, and include external script to further process the product data.

```javascript
<script type="text/javascript">
...
    var product = {
      ...
        currency: 'PLN',
        url: '...',
        photo: {{dynamic_banners}},
		valid: date1,
		date: date1 - 18000
    };
</script>
...
```

---

## **STEP6: Basket Data**
Get departure date and define basket with the list of products and their details.

```javascript
<script type="text/javascript">
...
    var basket = {
        products: [
            { identifier: '...', amount: {{CalcValToPLN}}, currency: 'PLN', quantity: {{MU_PassangersTotal}} }
        ]
    };
</script>
...
```

---

## **STEP_ConfPage: Sale Confirmation and Basket Update**
Check for specific cookie presence to confirm the sale, extract departure date, and update the basket with transaction details.

```javascript
<script type="text/javascript">
...
	if( document.cookie.indexOf('utmcsr=L76b4dvh') >= 0 ){
		var sale =
		{
		confirmed: true
		};
	}
...
    var basket = {
        products: [
            { identifier: '...', amount: {{CalcValToPLN}}, currency: 'PLN', quantity: {{MU_PassangersTotal}}}
             ],
             transaction : '{{MU_PNRNumber}}',
        amount: '{{CalcValToPLN}}',
        currency: 'PLN'
    };
</script>
...
```

---

Each step is designed to capture and process a specific set of product data, which can then be used for various programmatic campaigns. Users can incorporate these tags into their campaign framework, ensuring dynamic content and data-driven decisions.