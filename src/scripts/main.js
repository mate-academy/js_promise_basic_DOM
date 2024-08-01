'use strict';

// write your code here

document.querySelector('.logo').addEventListener('click', () => {
  const resolvedPromise = Promise.resolve('Promise was resolved!');
  const successMessage = document.createElement('div');

  successMessage.setAttribute('class', 'message');

  resolvedPromise.then((data) => {
    successMessage.textContent = data;
    document.body.appendChild(successMessage);
  });
});

const rejectedPromise = Promise.reject(new Error('Promise was rejected!'));

const errorMessage = document.createElement('div');

setTimeout(() => {
  rejectedPromise.catch(() => {
    errorMessage.setAttribute('class', 'error-message message ');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  });
}, 3000);
