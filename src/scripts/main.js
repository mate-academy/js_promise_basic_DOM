'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1.then(() => makeMessage());

promise2.catch(() => {
  makeMessage('error-message');
});

function makeMessage(type) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (type) {
    message.classList.add(type);
    message.textContent = 'Promise was rejected!';
  } else {
    message.textContent = 'Promise was resolved!';
  }

  body.appendChild(message);
}
