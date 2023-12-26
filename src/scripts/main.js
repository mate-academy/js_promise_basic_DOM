'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function createNotification(className, message) {
  const div = document.createElement('div');

  div.className = className;
  div.innerText = message;
  body.appendChild(div);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(() => {
    createNotification('message', 'Promise was resolved!');
  })
  .catch(() => {
    createNotification('message error-message', 'Promise was rejected!');
  });

promise2
  .then(() => {
    createNotification('message', 'Promise was resolved!');
  })
  .catch(() => {
    createNotification('message error-message', 'Promise was rejected!');
  });
