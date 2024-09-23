'use strict';

const promise1 = new Promise((resolve) => {
  const button = document.querySelector('.logo');

  button.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  window.setTimeout(reject, 3000);
});

function successHandler() {
  const successMessageDiv = document.createElement('vid');

  successMessageDiv.classList.add('message');
  successMessageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessageDiv);
}

function errorHandler() {
  const errorMessageDiv = document.createElement('vid');

  errorMessageDiv.classList.add('message', 'error-message');
  errorMessageDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessageDiv);
}

promise1.then(successHandler);
promise2.catch(errorHandler);
