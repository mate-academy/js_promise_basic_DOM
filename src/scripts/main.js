'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {});
const promise2 = new Promise((resolve, reject) => {});

logo.addEventListener('click', () => {
  promise1
    .then(success());
});

promise2
  .catch(setTimeout(() => error(), 3000));

function success() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
};

function error() {
  const message = document.createElement('div');

  message.className = 'error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
};
