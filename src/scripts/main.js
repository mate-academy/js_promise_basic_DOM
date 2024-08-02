'use strict';

// write your code here
const successMessagePromise = new Promise((resolve) => {
  const successMessage = document.createElement('div');

  successMessage.setAttribute('class', 'message');

  successMessage.textContent = 'Promise was resolved!';
  resolve(successMessage);
});

successMessagePromise.then((successMessage) => {
  document.querySelector('.logo').addEventListener('click', () => {
    document.body.appendChild(successMessage);
  });
});

const erorPromise = new Promise((resolve, reject) => {
  const errorMessage = document.createElement('div');

  errorMessage.setAttribute('class', 'error-message message ');
  errorMessage.textContent = 'Promise was rejected!';
  reject(errorMessage);
});

erorPromise.catch((errorMessage) => {
  setTimeout(() => {
    document.body.appendChild(errorMessage);
  }, 3000);
});
