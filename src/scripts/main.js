'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// Promise 2: Reject after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

// General handler for promises
const handlePromise = (promise) => {
  promise
    .then((message) => {
      createMessageElement(message, 'message');
    })
    .catch((error) => {
      createMessageElement(error.message, 'message error-message');
    });
};

// Utility to create and append message elements
const createMessageElement = (text, className) => {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;
  document.body.append(div);
};

// Attach handlers to promises
handlePromise(promise1);
handlePromise(promise2);
