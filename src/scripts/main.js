'use strict';

// write your code here

const button = document.querySelector('.logo');
const body = document.querySelector('body');

const notification = (message, className) => {
  body.insertAdjacentHTML('beforeend', `
    <div class="${className}">${message}</div>`);
};

const promise1 = new Promise((resolve) => {
  button.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(result => {
  notification(result, 'message');
});

promise2.catch(error => {
  notification(error.message, 'message error-message');
});
