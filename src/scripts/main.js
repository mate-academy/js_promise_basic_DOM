'use strict';

const body = document.querySelector('body');
const button = document.querySelector('.logo');

function createMessage(className, text) {
  const message = document.createElement('div');

  message.className = className;
  message.textContent = text;

  body.append(message);
}

const firstPromise = new Promise((resolve, reject) => {
  button.addEventListener('click', resolve);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

firstPromise
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  });

secondPromise
  .catch(() => {
    createMessage('error-message', 'Promise was rejected!');
  });
