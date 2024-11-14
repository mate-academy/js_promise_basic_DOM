'use strict';

// Promise 1: Resolved on click of `.logo`
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// Promise 2: Rejected after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Function to append success message
function handleSuccess(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

// Function to append error message
function handleError(error) {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error.message;
  document.body.appendChild(div);
}

// Add success and error handlers to both promises
promise1.then(handleSuccess).catch(handleError);

promise2.then(handleSuccess).catch(handleError);
