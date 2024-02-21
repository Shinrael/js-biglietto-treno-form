// Dati iniziali

const rate = 0.21
const name = document.querySelector('.name-lastname');
const km = document.querySelector('.kilometers');
let price = rate * km;
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
console.log(price);
if (selectAge.value === 'young'){
  offerTicket.innerHTML = youngTicket
  priceTicket.innerHTML = price * 0.2;
} else if(selectAge.value === 'adult') {
  offerTicket.innerHTML = adultTicket
  priceTicket.innerHTML = price;
} else if(selectAge.value === 'over65') {
  offerTicket.innerHTML = olderTicket
  priceTicket.innerHTML = price * 0.4;
}

finalContainer.classList.toggle('d-none');

})
