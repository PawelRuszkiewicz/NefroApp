"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const addG =  document.querySelector('.addGlass--js');
const subG = document.querySelector('.subtractGlass--js');
const counter = document.querySelector('.counter--js');
const keyLs = new Date().toISOString().slice(0, 10);
console.log(keyLs);

