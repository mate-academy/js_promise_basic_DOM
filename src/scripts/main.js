'use strict';

const logo = document.querySelector('.logo');
// write your code here

function successDiv() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}

function errorDiv() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(successDiv);
promise2.catch(errorDiv);
