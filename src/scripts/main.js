'use strict';

function createMessage(className, text) {
  const message = document.createElement('div');

  message.classList.add('message', className);
  message.textContent = text;

  return message;
}

function getFirstPromise() {
  return new Promise((resolve) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });
}

function getSecondPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
}

const root = document.querySelector('body');

const promise1 = getFirstPromise();
const promise2 = getSecondPromise();

promise1
  .then((message) => {
    root.appendChild(createMessage('message', message));
  })
  .catch((error) => {
    root.appendChild(createMessage('error-message', error));
  });

promise2
  .then((message) => {
    root.appendChild(createMessage('message', message));
  })
  .catch((error) => {
    root.appendChild(createMessage('error-message', error));
  });
