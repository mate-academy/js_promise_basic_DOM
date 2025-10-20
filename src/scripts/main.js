'use strict';

function successHandler() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}

function errorHandler() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
}

const promise1 = new Promise((resolve) => {
  const getLogo = document.querySelector('.logo');

  getLogo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1.then(successHandler);
promise2.catch(errorHandler);
