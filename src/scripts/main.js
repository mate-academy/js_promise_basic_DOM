'use strict';

// write your code here
const logoElement = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logoElement.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((message) => {
  const newElement = document.createElement('div');

  newElement.textContent = message;
  newElement.classList.add('message');

  body.append(newElement);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

promise2.catch((errorMessage) => {
  const newElement = document.createElement('div');

  newElement.textContent = errorMessage;
  newElement.classList.add('message', 'error-message');

  body.append(newElement);
});
