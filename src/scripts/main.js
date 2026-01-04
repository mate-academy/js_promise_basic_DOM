'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const showSuccess = (message) => {
  const messageElement = document.createElement('div');

  messageElement.classList.add('message');
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
};

const showError = (error) => {
  const errorElement = document.createElement('div');

  errorElement.classList.add('message', 'error-message');
  errorElement.textContent = error.message;
  document.body.appendChild(errorElement);
};

promise1.then(showSuccess).catch(showError);

promise2.then(showSuccess).catch(showError);
