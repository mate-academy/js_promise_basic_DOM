'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

promise1.then((data) => showMessage(data));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => showMessage(error.message, 'error-message'));

function showMessage(message, classModifier = '') {
  const div = document.createElement('div');

  div.classList.add('message');

  if (classModifier.length > 0) {
    div.classList.add('error-message');
  }
  div.textContent = message;

  document.body.appendChild(div);
}
