'use strict';

function successHandler(text) {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = text;
  document.body.append(message);
}

function errorHandler() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
}

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then(successHandler).catch(errorHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise2.then(successHandler).catch(errorHandler);
