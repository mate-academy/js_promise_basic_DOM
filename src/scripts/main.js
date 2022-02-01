'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

function createNewMessage(newClass, text) {
  body.insertAdjacentHTML('beforeend', `
    <div class=${newClass}><p>${text}</p></div>
  `);
}

const promise1 = new Promise((resolve, reject) => {
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
  createNewMessage('message', 'Promise was resolved!');
});

promise2.catch(() => {
  createNewMessage('error-message message', 'Promise was rejected!');
});
