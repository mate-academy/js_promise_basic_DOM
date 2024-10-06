'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const promise1 = new Promise(function (resolve, reject) {
      const successDiv = document.createElement('div');

      successDiv.textContent = 'Promise was resolved!';
      successDiv.classList.add('message');

      resolve(successDiv); // коли успіх
    });

    promise1.then((successDiv) => {
      document.body.appendChild(successDiv);
    });
  });

  const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const errorDiv = document.createElement('div');

      errorDiv.textContent = 'Promise was rejected!';
      errorDiv.classList.add('message', 'error-message');

      reject(errorDiv);
    }, 3000);
  });

  promise2.catch((errorDiv) => {
    document.body.appendChild(errorDiv);
  });
});
