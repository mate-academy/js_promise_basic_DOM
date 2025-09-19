'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener('click', () => resolve(), { once: true });
  }
});

promise1.then(successMessage).catch(errorMessage);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.then(successMessage).catch(errorMessage);

function successMessage() {
  const success = document.createElement('div');

  success.className = 'message';
  success.textContent = 'Promise was resolved!';
  body.appendChild(success);
}

function errorMessage() {
  const error = document.createElement('div');

  error.className = 'message error-message';
  error.textContent = 'Promise was rejected!';
  body.appendChild(error);
}
