'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

const success = () => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.innerText = 'Promise was resolved!';
  document.body.appendChild(successMessage);
};

const error = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message');
  errorMessage.classList.add('error-message');
  errorMessage.innerText = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1.then(success).catch(error);
promise2.then(success).catch(error);
