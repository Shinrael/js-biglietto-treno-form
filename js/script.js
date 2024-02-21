// Dati iniziali

const rate = 0.21
const name = document.querySelector('.name-lastname');
const km = document.querySelector('.kilometers');

const selectAge = document.querySelector('.select-age');
const nameTicket = document.querySelector('.name-t')
const offerTicket = document.querySelector('.ticket-t')
const youngTicket = 'Biglietto Minorenne';
const adultTicket = 'Biglietto Standard';
const olderTicket = 'Biglietto Over 65';
const priceTicket = document.querySelector('.price-t')
const finalContainer = document.querySelector('.container-me-final')



// Pulsanti

const generate = document.querySelector('.generate');
const cancel = document.querySelector('.cancel');

// Azioni

generate.addEventListener('click',function(){
  
console.log(name.value);
nameTicket.innerHTML = name.value;
console.log(km.value);
console.log(selectAge.value);
const distance = parseFloat(km.value);
const price = rate * distance;
console.log(price);
if (selectAge.value === 'young'){
  offerTicket.innerHTML = youngTicket
  priceTicket.innerHTML = '€ ' + (price - (price * 0.2)).toFixed(2);
} else if(selectAge.value === 'adult') {
  offerTicket.innerHTML = adultTicket
  priceTicket.innerHTML = '€ ' + price.toFixed(2);
} else if(selectAge.value === 'over65') {
  offerTicket.innerHTML = olderTicket
  priceTicket.innerHTML = '€ ' + (price - (price * 0.4)).toFixed(2);
}

finalContainer.classList.toggle('d-none');

})
