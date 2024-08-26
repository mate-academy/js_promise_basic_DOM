'use strict';

const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  } else {
    reject(new Error('logo element is not find'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  createMessage(true);
});

promise2.catch(() => {
  createMessage(false);
});

function createMessage(isResolved) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isResolved) {
    message.textContent = 'Promise was resolved!';
    body.append(message);
  } else {
    message.classList.add('error-message');
    message.textContent = 'Promise was rejected!';
    body.append(message);
  }
}
