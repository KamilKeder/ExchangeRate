var key = "1ab672fda86647a5b52bbec7dc002812";
var input_wartosc = document.querySelector("#input_wartosc");
var button_przelicz = document.querySelector("#button_przelicz");
var div_kursy = document.querySelector("#div_kursy");
button_przelicz.addEventListener("click", function(){

fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey="+key)
.then(res => res.json())
.then((data) =>{

		var zmienna1 = (Math.round(data.rates.PLN * 100) / 100).toFixed(2);
		var zmienna2 = 1/ Number(data.rates.EUR) * Number(data.rates.PLN)
		var zmienna3 = 1 / Number(data.rates.GBP) * Number(data.rates.PLN)
		zmienna2 = (Math.round(zmienna2 * 100) / 100).toFixed(2);
		zmienna3 = (Math.round(zmienna3 * 100) / 100).toFixed(2);
        div_kursy.innerHTML = `
        Kurs || Kwota<br>
        USD = ${zmienna1} || `+(Math.round((Number(input_wartosc.value)/Number(zmienna1)) * 100) / 100).toFixed(2)+`USD<br>
        EUR = ${zmienna2} || `+(Math.round((Number(input_wartosc.value)/Number(zmienna2)) * 100) / 100).toFixed(2)+`EUR<br>
        GBP = ${zmienna3} || `+(Math.round((Number(input_wartosc.value)/Number(zmienna3)) * 100) / 100).toFixed(2)+`GBP

        `

    })
    .catch(error => 
        alert("Niestety nie możemy obliczyć kursu walut.")
        ); 

})
