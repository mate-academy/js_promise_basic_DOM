'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('logo was clicked');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error timeout'));
  }, 3000);
});

function showSuccessMessage() {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
}

function showErrorMessage() {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message', 'error-message');
  messageDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(messageDiv);
}

promise1
  .then(() => {
    showSuccessMessage();
  })
  .catch(() => {
    showErrorMessage();
  });

promise2
  .then(() => {
    showSuccessMessage();
  })
  .catch(() => {
    showErrorMessage();
  });
