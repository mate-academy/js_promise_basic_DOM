'use strict';

// write your code here

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Logo clicked!');
  });
});

function handleSuccess() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}

function handleError() {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
}

promise1.then(handleSuccess).catch(handleError);

document.addEventListener('DOMContentLoaded', () => {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout reached!'));
    }, 3000);
  });

  promise2.then(handleSuccess).catch(handleError);
});
