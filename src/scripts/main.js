'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function error() {
  body.innerHTML
  += `<div class='message error-message'>Promise was rejected!</div>`;
}

const successHandler
= body.innerHTML += `<div class='message'>Promise was resolved!</div>`;

const errorHandler = () => {
  setTimeout(error, 3000);
};

const promise1 = new Promise(function(resolve) {
  resolve(logo.addEventListener('click', () => successHandler));
});
const promise2 = new Promise(function(resolve, reject) {
  reject(errorHandler());
});

promise1.then(successHandler);
promise2.catch(errorHandler);
