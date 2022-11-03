'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');
const body = document.body;

new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
}).then(() => {
  message.classList.add('message');
  message.innerHTML = `Promise was resolved!`;
  body.appendChild(message);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 3000);
}).catch(() => {
  message.classList.add('error-message');
  message.innerHTML = `Promise was rejected!`;
  body.appendChild(message);
});
