'use strict';

// promise1 – resolved on click on .logo
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

// promise2 – rejected after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

// success handler
function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

// error handler
function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

// attach handlers
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
