'use strict';
/* eslint-disable no-debugger, no-console */

// write your code here
const logo = document.querySelector('.logo');

function createMessage(className, text) {
  const h1 = document.querySelector('h1');

  h1.insertAdjacentHTML('afterend',
    `
    <div class="${className}">${text}</div>
    `
  );
}

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

firstPromise
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  });

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

secondPromise
  .catch(() => {
    createMessage('message error-message', 'Promise was rejected!');
  });
