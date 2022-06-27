'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

promise1.then(() => document.body.insertAdjacentHTML('beforeend', `
  <div class="message">Promise was resolved!</div>
  `)
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise2.catch(() => document.body.insertAdjacentHTML('beforeend', `
<div class="error-message">Promise was rejected!</div>
`)
);
