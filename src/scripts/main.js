'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function successDiv() {
  const notification = document.createElement('div');

  notification.classList.add('message');

  notification.textContent = `Promise was resolved!`;

  body.append(notification);
}

function errorDiv() {
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.classList.add('error-message');

  notification.textContent = `Promise was rejected!`;

  body.append(notification);
}

const promise1 = new Promise((resolve) => {
  resolve();
});

logo.addEventListener('click', () => {
  promise1.then(successDiv);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Bad shit bro'));
  }, 3000);
});

promise2.catch(errorDiv);
