'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function message(className, title) {
  body.insertAdjacentHTML('beforeend', `
    <div class="${className}">${title}</div>
  `);
}

const successHandler = () => message('message', 'Promise was resolved');
const errorHandler = () => message('error-message', 'Promise was reject!');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
