'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const createMessage = (message, isError = false) => {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = message;
  document.body.appendChild(div);
};

const successHandler = (message) => {
  createMessage(message);
};

const errorHandler = (message) => {
  createMessage(message, true);
};

promise1
  .then(() => successHandler('Promise was resolved!'))
  .catch((error) => errorHandler(error.message));

promise2
  .then(() => successHandler('Promise was resolved!'))
  .catch((error) => errorHandler(error.message));
