'use strict';

const logo = document.querySelector('.logo');
const page = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Time is out'));
  }, 3000);
});

const successHandler = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = `Promise was resolved!`;
  page.append(message);
};

const errorHandler = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = `Promise was rejected!`;
  page.append(message);
};

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
