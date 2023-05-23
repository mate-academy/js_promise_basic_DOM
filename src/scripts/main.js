'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(onSucsses)
  .catch(onError);

promise2
  .then(() => {})
  .catch(onError);

function onSucsses() {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
}

function onError(error) {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.classList.add('message', 'error-message');
  errorMessageDiv.textContent = error.message;
  document.body.appendChild(errorMessageDiv);
}
