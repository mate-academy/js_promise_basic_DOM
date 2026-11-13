'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');

message.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise war rejected!')), 3000);
});

function showSuccess() {
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}

function showError() {
  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
}

promise1.then(showSuccess, showError);
promise2.then(showSuccess, showError);
