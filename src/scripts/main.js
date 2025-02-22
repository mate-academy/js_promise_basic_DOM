'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const successPromise = () => {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';
  document.body.append(success);
};

const errorPromise = (error) => {
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('message', 'error-message');
  errorDiv.textContent = error.message;
  document.body.append(errorDiv);
};

promise1.then(successPromise);
promise2.catch(errorPromise);
