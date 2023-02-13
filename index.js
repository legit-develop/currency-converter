const currencyFirstEl = document.getElementById("currency-first");
console.log(currencyFirstEl);
const worthFirstEl = document.getElementById("worth-first");
console.log(worthFirstEl);
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");
console.log(exchangeRateEl);

updateRate(); //to dynamical insert the values as soon as the website uploads

function updateRate() {
  /*
    API Currency - www.exchangerate-api.com
  */

  fetch(
    `https://v6.exchangerate-api.com/v6/90fa7c76bbfdc2800b12ad72/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      const rate = data.conversion_rates[currencySecondEl.value];
      // console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
