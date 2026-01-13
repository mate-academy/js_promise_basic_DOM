'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

// Promise 2 — reject через 3 секунды
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

// Success handler
function onSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

// Error handler
function onError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

// Attach handlers
promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
