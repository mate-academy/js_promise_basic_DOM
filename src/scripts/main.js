'use strict';

const logo = document.querySelector('.logo');
const successMessage = 'Promise was resolved!';
const errorMessage = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(successMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

promise1.then(result1 => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = result1;
  document.body.appendChild(messageDiv);

  promise2.then(result2 => {
    const messageDiv2 = document.createElement('div');

    messageDiv2.className = 'message';
    messageDiv2.textContent = result2;
    document.body.appendChild(messageDiv2);
  }).catch(error => {
    const errorMessageDiv2 = document.createElement('div');

    errorMessageDiv2.className = 'message error-message';
    errorMessageDiv2.textContent = error;
    document.body.appendChild(errorMessageDiv2);
  });
});

promise1.catch(error => {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.className = 'message error-message';
  errorMessageDiv.textContent = error;
  document.body.appendChild(errorMessageDiv);
});
