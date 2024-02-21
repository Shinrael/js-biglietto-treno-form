// Dati iniziali

const rate = 0.21
const name = document.querySelector('.name-lastname');
const km = document.querySelector('.kilometers');
const selectAge = document.querySelector('.select-age');
const price = rate * km
const nameTicket = document.querySelector('.name-t')


// Pulsanti

const generate = document.querySelector('.generate');
const cancel = document.querySelector('.cancel');

// Azioni

generate.addEventListener('click',function(){
console.log(name.value);
nameTicket.innerHTML = name.value;
})
