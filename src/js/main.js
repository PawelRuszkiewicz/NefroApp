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
const keyLs = new Date().toISOString().slice(0, 10);  // get strimg witch date in format RRRR-MM-DD


const counterCheck = () => {
  return "T";
};
// let counterValue = 0; // counterCheck();
// counter.innerHTML = counterValue;


addG.addEventListener('click', (e) => {

  if (counterValue >= 50) {
    counter.innerHTML = ":)";
    console.log('wypiłeś 10 l. wody. Jesteś koniem?');
    }
  else {
    counterValue += 1;
    console.log(counterValue);
    localStorage.setItem(keyLs, counterValue);
    counter.innerHTML = counterValue;
    console.log(counterValue);
    }
  }
)

subG.addEventListener('click', (e) => {

  if (counterValue == 0) {
    counterValue = 0;
    console.log(counterValue);
    localStorage.setItem(keyLs, counterValue)
    counter.innerHTML = counterValue;
  } else {
    counterValue -= 1;
    console.log(counterValue)
    localStorage.setItem(keyLs, counterValue);
    counter.innerHTML = counterValue;
  }
}
)