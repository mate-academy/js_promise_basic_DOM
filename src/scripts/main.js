/* eslint-disable max-len */
// Create 2 promises `promise1` and `promise2`.
// - `promise1` should be resolved on a `click` on `.logo`.
// - `promise2` promise should be rejected in 3 seconds.
// - add success and error handlers for both promises
// - success handler should append a `<div class="message">` with the text `Promise was resolved!` to the body
// - error handler should append a `<div class="message error-message">` with the text `Promise was rejected!` to the body
'use strict';

// write your code here
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

const handlerSuccses = (message) => {
  const succsesDiv = document.createElement('div');

  succsesDiv.textContent = message;
  succsesDiv.classList.add('message');
  document.querySelector('body').appendChild(succsesDiv);
};

const handlerError = (error) => {
  const errorDiv = document.createElement('div');

  errorDiv.textContent = error.message;
  errorDiv.classList.add('message', 'error-message');
  document.querySelector('body').appendChild(errorDiv);
};

promise1.then(handlerSuccses).catch();
promise2.then().catch(handlerError);
