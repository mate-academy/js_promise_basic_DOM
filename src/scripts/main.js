'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

promise1
  .then(() => showMessage('Promise was resolved!', 'message'))
  .catch(() => showMessage('Promise was rejected!', 'message error-message'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout error'));
  }, 3000);
});

promise2
  .then(() => showMessage('Promise was resolved!', 'message'))
  .catch(() => showMessage('Promise was rejected!', 'message error-message'));

function showMessage(text, className) {
  const newDiv = document.createElement('div');

  newDiv.className = className;
  newDiv.textContent = text;
  document.body.append(newDiv);
}
