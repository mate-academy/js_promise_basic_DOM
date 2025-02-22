'use strict';

const logo = document.querySelector('.logo');

function showMessage(text, isError = false) {
  const message = document.createElement('div');

  message.innerText = text;
  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }
  document.body.appendChild(message);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => showMessage('Promise was resolved!'));

promise2
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', true));
