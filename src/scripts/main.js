'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const displayMessage = (message, classNames = ['message']) => {
  const div = document.createElement('div');

  div.classList.add(...classNames);

  div.textContent = message;
  document.body.appendChild(div);
};

const successHandler = (message) => {
  displayMessage(message);
};

const errorHandler = (errorMessage) => {
  displayMessage(errorMessage, ['message', 'error-message']);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
