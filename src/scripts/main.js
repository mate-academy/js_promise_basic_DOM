'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

function displayMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.append(div);
}

promise1
  .then(() => displayMessage('Promise was resolved!'))
  .catch(() => displayMessage('Promise was rejected!', true));

promise2
  .then(() => displayMessage('Promise was resolved!'))
  .catch(() => displayMessage('Promise was rejected!', true));
