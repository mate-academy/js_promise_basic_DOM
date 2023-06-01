'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(result => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = result;

  logo.parentNode.appendChild(messageDiv);
});

promise2.catch(error => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message', 'error-message');
  messageDiv.textContent = error.message;

  logo.parentNode.appendChild(messageDiv);
});
