/* eslint-disable prefer-promise-reject-errors */
'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

function successHandler() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';

  document.body.appendChild(div);
}

function errorHandler() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';

  document.body.appendChild(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
