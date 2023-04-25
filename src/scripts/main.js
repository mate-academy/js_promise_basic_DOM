'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const successful = () => {
  logo.insertAdjacentHTML('beforeend',
    `<div class = "message">Promise was resolved!</div>`);
};

const error = () => {
  body.insertAdjacentHTML('afterend',
    `<div class = "message error-message">Promise was rejected!</div>`);
};

promise1.then(successful).catch(error);
promise2.then(successful).catch(error);
