'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Timeout')), 3000);
});

const successHandler = () => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
};

const errorHandler = () => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message error-message';
  messageDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(messageDiv);
};

promise1.then(successHandler);
promise2.catch(errorHandler);
