/* eslint-disable prefer-promise-reject-errors */
'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

const successHandler = (message) => {
  return (`<div class="message">${message}</div>`);
};
const errorHandler = (message) => {
  return (`<div class="message error-message">${message}</div>`);
};

promise1.then(successHandler)
  .then((sucsess) => body.insertAdjacentHTML('beforeend', sucsess));

promise2.catch(errorHandler)
  .then((err) => body.insertAdjacentHTML('beforeend', err));
