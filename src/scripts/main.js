'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('The logo was not clicked in time'));
  }, 3000);
});

function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = text;

  document.body.appendChild(div);
}

promise1.then(() => showMessage('Promise was resolved!'));
promise1.catch(() => showMessage('Promise was rejected!', true));
promise2.then(() => showMessage('Promise was resolved!'));
promise2.catch(() => showMessage('Promise was rejected!', true));
