'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logoElement = document.querySelector('.logo');

  if (!logoElement) {
    reject(new Error('Promise was rejected!'));

    return;
  }

  logoElement.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function createSuccessMessage(text) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

function createErrorMessage(erroR) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message error-message';
  messageDiv.textContent = erroR;
  document.body.appendChild(messageDiv);
}

promise1
  .then((result) => {
    createSuccessMessage(result);
  })
  .catch((error) => {
    createErrorMessage(error);
  });

promise2
  .then((result) => {
    createSuccessMessage(result);
  })
  .catch((error) => {
    createErrorMessage(error);
  });
