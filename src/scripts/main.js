'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const successHandler = () => {
  const messageSuccess = document.createElement('div');

  messageSuccess.classList.add('message');
  messageSuccess.textContent = 'Promise was resolved!';
  body.appendChild(messageSuccess);
};

const errorHandler = () => {
  const messageError = document.createElement('div');

  messageError.classList.add('message');
  messageError.textContent = 'Promise was resolved!';
  body.appendChild(messageError);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(errorHandler), 3000);
});

promise1.then(successHandler);
promise2.catch(errorHandler);
