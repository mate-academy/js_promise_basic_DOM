'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise rejected!')), 3000);
});

const handlerSuccess = () => {
  const message = document.createElement('div');

  message.textContent = 'Promise was resolved!';
  message.classList.add('message');
  body.appendChild(message);
};

const handlerError = () => {
  const message = document.createElement('div');

  message.textContent = 'Promise was rejected!';
  message.classList.add('message', 'error-message');
  body.appendChild(message);
};

promise1.then(handlerSuccess);
promise1.catch(handlerError);

promise2.then(handlerSuccess);
promise2.catch(handlerError);
