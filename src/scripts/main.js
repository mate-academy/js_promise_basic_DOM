'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

// Create promise2 rejected after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 was rejected after 3 seconds'));
  }, 3000);
});

const successHandler1 = () => {
  const resolvePromiseDiv = document.createElement('div');

  resolvePromiseDiv.classList.add('message');
  resolvePromiseDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(resolvePromiseDiv);
};

const errorHandler1 = () => {
  const rejectPromiseDiv = document.createElement('div');

  rejectPromiseDiv.classList.add('message', 'error-message');
  rejectPromiseDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(rejectPromiseDiv);
};

promise1.then(successHandler1, errorHandler1);
promise2.then(successHandler1, errorHandler1);
