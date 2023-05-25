'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => {
    printMessage('Promise was resolved!', ['message']);
  });

promise2
  .catch(() => {
    printMessage('Promise was rejected!', ['message', 'error-message']);
  });

function printMessage(text, type) {
  const div = document.createElement('div');

  div.classList.add(...type);
  div.textContent = text;

  body.append(div.cloneNode(true));
}
