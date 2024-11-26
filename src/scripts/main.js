'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const handleSuccess = () => {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(successDiv);
};

const handleError = (error) => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = error.message;
  document.body.appendChild(errorDiv);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
