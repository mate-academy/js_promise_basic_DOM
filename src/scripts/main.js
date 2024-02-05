'use strict';

const promise1 = new Promise(function(resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', function() {
    resolve();
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

function appendResolve(message) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
}

function appendRejection(message) {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
}

function promise1Success() {
  appendResolve('Promise was resolved!');
}

function promise1Error() {
  appendRejection('Promise was rejected!');
}

function promise2Success() {
  appendResolve('Promise was resolved!');
}

function promise2Error() {
  appendRejection('Promise was rejected!');
}

promise1.then(promise1Success).catch(promise1Error);

promise2.then(promise2Success).catch(promise2Error);
