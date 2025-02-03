'use strict';

const logo = document.querySelector('.logo');

// Create promise1 that resolves on a click event
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// Create promise2 that rejects after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Success handler function
const handleSuccess = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
};

// Error handler function
const handleError = (error) => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = error.message;
  document.body.appendChild(message);
};

// Attach handlers to promises
promise1.then(handleSuccess);
promise2.catch(handleError);
