'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolv = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
  `);
};

const rej = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message error-message">Promise was rejected!</div>
  `);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(rej), 3000);
});

promise1.then(resolv);
promise2.catch(rej);
