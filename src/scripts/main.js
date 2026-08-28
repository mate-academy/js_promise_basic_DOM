'use strict';

const logoElement = document.querySelector('.logo');

function handleSuccess(message) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message || 'Promise was resolved!';
  document.body.appendChild(messageDiv);
}

function handleError(error) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message error-message';
  messageDiv.textContent = error?.message || 'Promise was rejected!';
  document.body.appendChild(messageDiv);
}

const promise1 = new Promise((resolve) => {
  logoElement.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
