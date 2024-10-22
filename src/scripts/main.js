'use strict';

// write your code here
const h1 = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve) => {
  h1.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 3000);
});

const success = () => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
};

const error = () => {
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('message', 'error-message');
  errorDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorDiv);
};

promise1.then(success).catch(error);
promise2.then(success).catch(error);
