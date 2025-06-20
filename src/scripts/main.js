'use strict';

const logo = document.getElementById('logo');
const successMessage = 'Promise was resolved!';
const errorMessage = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout'));
  }, 3000);
});

function successHandler() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = successMessage;
  document.body.appendChild(div);
}

function errorHandler() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = errorMessage;
  document.body.appendChild(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
