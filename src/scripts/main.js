'use strict';

// Create promise1 that resolves on clicking .logo
const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

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

// Success handler for promise1
promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errorDiv);
  });

// Error handler for promise2
promise2
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = error.message; // Use the error message
    document.body.appendChild(errorDiv);
  });
