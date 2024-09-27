'use strict';

const firstPromise = new Promise(function(resolve, reject) {
  const logo = document.querySelector('h1');

  logo.addEventListener('click', () => resolve('Clicked'));
}).then(result => alert(result));

const secondPromise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('Problem!')), 5000);
}).catch((error) => alert(error));
