'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function createMessage(AddText, addClass) {
  const message = document.createElement('div');

  message.classList.add(addClass);
  message.textContent = AddText;
  body.append(message);
}

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

firstPromise
  .then(() => {
    createMessage('Promise was resolved!', 'message');
  });

secondPromise
  .catch(() => {
    createMessage('Promise was rejected!', 'error-message');
  });
