'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});
const successHandler = (result) => {
  document.body.insertAdjacentHTML('beforeend',
    `<div class = "message">${result}</div>`);
};
const errorHandler = (error) => {
  document.body.insertAdjacentHTML('beforeend',
    `<div class = "message error-message">${error}</div>`);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
