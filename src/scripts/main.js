'use strict';

// write your code here
// Create promise1
const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

// Add success and error handlers for promise1
promise1.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}).catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
});

// Create promise2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

// Add success and error handlers for promise2
promise2.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}).catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
});
