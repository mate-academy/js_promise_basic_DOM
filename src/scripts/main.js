'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function successHandler() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function errorHandler(err) {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = err.message;
  document.body.appendChild(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
