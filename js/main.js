!function(e){var n={};function t(c){if(n[c])return n[c].exports;var l=n[c]={i:c,l:!1,exports:{}};return e[c].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(c,l,function(n){return e[n]}.bind(null,l));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// make queryselectors\n\nconst addG = document.querySelector('.addGlass--js');\nconst subG = document.querySelector('.subtractGlass--js');\nconst counter = document.querySelector('.counter--js');\nconst keyLs = new Date().toISOString().slice(0, 10);  // get strimg with date in format RRRR-MM-DD\nlet counterValue;\nconst actualizeLs = () => { localStorage.setItem(keyLs, counterValue); counter.innerHTML = counterValue; }\n\n//check if key with date are existing and have any value, if yes add in to counterValue, if no  set  key and value 0 and set in to counterValue.\nconst counterCheck = () => {\n  if (localStorage.getItem(keyLs)) {\n    counterValue = parseInt(localStorage.getItem(keyLs), 10);\n    counter.innerHTML = counterValue;\n    console.log(`jest klucz i ma wartosć : ${counterValue}`);\n  }\n  else {\n    localStorage.setItem(keyLs, 0);\n    counterValue = parseInt(localStorage.getItem(keyLs), 10);\n    counter.innerHTML = counterValue;\n    console.log(`brak klucza- zakładam i przypisuje wartość ${counterValue}`)\n  }\n};\ncounterCheck();\n\naddG.addEventListener('click', (e) => {\n  if (counterValue >= 50) {\n    counter.innerHTML = \"🐳\";\n  }\n  else { counterValue += 1; actualizeLs(); }\n})\n\nsubG.addEventListener('click', (e) => {\n  if (counterValue == 0) {\n    counterValue = 0; actualizeLs();\n  }\n  else { counterValue -= 1; actualizeLs(); }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkJBQTJCLDJDQUEyQyxrQ0FBa0M7O0FBRXhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGFBQWE7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtQkFBbUIsZUFBZTtBQUMxQyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxRQUFRLG1CQUFtQixlQUFlO0FBQzFDLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gbWFrZSBxdWVyeXNlbGVjdG9yc1xuXG5jb25zdCBhZGRHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEdsYXNzLS1qcycpO1xuY29uc3Qgc3ViRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJ0cmFjdEdsYXNzLS1qcycpO1xuY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLS1qcycpO1xuY29uc3Qga2V5THMgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApOyAgLy8gZ2V0IHN0cmltZyB3aXRoIGRhdGUgaW4gZm9ybWF0IFJSUlItTU0tRERcbmxldCBjb3VudGVyVmFsdWU7XG5jb25zdCBhY3R1YWxpemVMcyA9ICgpID0+IHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5THMsIGNvdW50ZXJWYWx1ZSk7IGNvdW50ZXIuaW5uZXJIVE1MID0gY291bnRlclZhbHVlOyB9XG5cbi8vY2hlY2sgaWYga2V5IHdpdGggZGF0ZSBhcmUgZXhpc3RpbmcgYW5kIGhhdmUgYW55IHZhbHVlLCBpZiB5ZXMgYWRkIGluIHRvIGNvdW50ZXJWYWx1ZSwgaWYgbm8gIHNldCAga2V5IGFuZCB2YWx1ZSAwIGFuZCBzZXQgaW4gdG8gY291bnRlclZhbHVlLlxuY29uc3QgY291bnRlckNoZWNrID0gKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5THMpKSB7XG4gICAgY291bnRlclZhbHVlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5THMpLCAxMCk7XG4gICAgY291bnRlci5pbm5lckhUTUwgPSBjb3VudGVyVmFsdWU7XG4gICAgY29uc29sZS5sb2coYGplc3Qga2x1Y3ogaSBtYSB3YXJ0b3PEhyA6ICR7Y291bnRlclZhbHVlfWApO1xuICB9XG4gIGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleUxzLCAwKTtcbiAgICBjb3VudGVyVmFsdWUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlMcyksIDEwKTtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IGNvdW50ZXJWYWx1ZTtcbiAgICBjb25zb2xlLmxvZyhgYnJhayBrbHVjemEtIHpha8WCYWRhbSBpIHByenlwaXN1amUgd2FydG/Fm8SHICR7Y291bnRlclZhbHVlfWApXG4gIH1cbn07XG5jb3VudGVyQ2hlY2soKTtcblxuYWRkRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChjb3VudGVyVmFsdWUgPj0gNTApIHtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IFwi8J+Qs1wiO1xuICB9XG4gIGVsc2UgeyBjb3VudGVyVmFsdWUgKz0gMTsgYWN0dWFsaXplTHMoKTsgfVxufSlcblxuc3ViRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChjb3VudGVyVmFsdWUgPT0gMCkge1xuICAgIGNvdW50ZXJWYWx1ZSA9IDA7IGFjdHVhbGl6ZUxzKCk7XG4gIH1cbiAgZWxzZSB7IGNvdW50ZXJWYWx1ZSAtPSAxOyBhY3R1YWxpemVMcygpOyB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);