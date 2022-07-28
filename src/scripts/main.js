'use strict';

const successHandler = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
};

const errorHandler = () => {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
};

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
