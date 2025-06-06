'use strict';

const logo = document.querySelector('.logo');

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

promise1.then(() => {
  getMessage('resolved', 'message');
});

promise2.catch(() => {
  getMessage('resolved', 'message error-message');
});

function getMessage(text, className) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = `Promise was ${text}!`;

  document.body.appendChild(div);
}
