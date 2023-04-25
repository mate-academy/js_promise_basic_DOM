'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const success = () => {
  body.insertAdjacentHTML('beforeend',
    `<div class="message">Promise was resolved!</div>`
  );
};

const error = () => {
  body.insertAdjacentHTML('beforeend',
    `<div class="error-message">Promise was rejected!</div>`
  );
};

promise1.then(success, error);
promise2.then(success, error);
