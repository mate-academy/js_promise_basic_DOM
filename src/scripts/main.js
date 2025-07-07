'use strict';

const doc = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 3000);
});

function successHandler() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  doc.appendChild(div);
}

function errorHandler() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  doc.appendChild(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(null).catch(errorHandler);
