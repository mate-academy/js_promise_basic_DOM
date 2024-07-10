'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  const handleSuccess = (message) => {
    const successDiv = document.createElement('div');

    successDiv.className = 'message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
  };

  const handleError = (error) => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = error;
    document.body.appendChild(errorDiv);
  };

  promise1.then(handleSuccess).catch(handleError);
  promise2.then(handleSuccess).catch(handleError);
});
