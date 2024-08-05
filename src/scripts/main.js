'use strict';

const promise1 = new Promise(function (resolve, reject) {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const successHundler = () => {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessage);
};

const errorHundler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1.then(successHundler).catch(errorHundler);
promise2.then(successHundler).catch(errorHundler);
