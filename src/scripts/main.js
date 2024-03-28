'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const success = () => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = 'Promise was resolved!';
  body.prepend(messageDiv);
};

const error = () => {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.classList.add('message', 'error-message');
  errorMessageDiv.textContent = 'Promise was rejected!';
  body.prepend(errorMessageDiv);
};

promise1.then(success).catch(error);
promise2.then(success).catch(error);
