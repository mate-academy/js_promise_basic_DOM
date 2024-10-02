'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected after 3 seconds'));
  }, 3000);
});

const successHandler = () => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessage);
};

const errorHandler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
