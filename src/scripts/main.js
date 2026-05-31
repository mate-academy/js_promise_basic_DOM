'use strict';

function showSuccess() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
}

function showError() {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
}

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(showSuccess).catch(showError);
promise2.then(showSuccess).catch(showError);
