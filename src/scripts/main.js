'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function successHandler(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;

  document.body.appendChild(div);
}

function errorHandler(message) {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = message;

  document.body.appendChild(div);
}

promise1
  .then((result) => successHandler(result))
  .catch((error) => errorHandler(error));

promise2
  .then((result) => successHandler(result))
  .catch((error) => errorHandler(error));
