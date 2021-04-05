'use strict';

const logo = document.querySelector('.logo');
const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');

const click = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const error = new Promise((resolve, reject) => {
  setInterval(() => {
    reject(new Error());
  }, 3000);
});

click.then(() => {
  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved!';
  logo.after(successMessage);
});

error.catch(() => {
  errorMessage.className = 'error-message';
  errorMessage.textContent = 'Promise was rejected!';
  logo.after(errorMessage);
});
