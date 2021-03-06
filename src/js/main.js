"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// make queryselectors

const addG = document.querySelector('.addGlass--js');
const subG = document.querySelector('.subtractGlass--js');
const counter = document.querySelector('.counter--js');
const keyLs = new Date().toISOString().slice(0, 10);  // get strimg with date in format RRRR-MM-DD
let counterValue;
const actualizeLs = () => { localStorage.setItem(keyLs, counterValue); counter.innerHTML = counterValue; }

//check if key with date are existing and have any value, if yes add in to counterValue, if no  set  key and value 0 and set in to counterValue.
const counterCheck = () => {
  if (localStorage.getItem(keyLs)) {
    counterValue = parseInt(localStorage.getItem(keyLs), 10);
    counter.innerHTML = counterValue;
    console.log(`jest klucz i ma wartosć : ${counterValue}`);
  }
  else {
    localStorage.setItem(keyLs, 0);
    counterValue = parseInt(localStorage.getItem(keyLs), 10);
    counter.innerHTML = counterValue;
    console.log(`brak klucza- zakładam i przypisuje wartość ${counterValue}`)
  }
};
counterCheck();

addG.addEventListener('click', (e) => {
  if (counterValue >= 50) {
    counter.innerHTML = "🐳";
  }
  else { counterValue += 1; actualizeLs(); }
})

subG.addEventListener('click', (e) => {
  if (counterValue == 0) {
    counterValue = 0; actualizeLs();
  }
  else { counterValue -= 1; actualizeLs(); }
})