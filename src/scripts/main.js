'use strict';

const logo = document.querySelector('.logo');

// Create promise1 that will be resolved on a click on .logo
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise 1 was resolved!');
  });
});

// Create promise2 that will be rejected in 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = new Error('Promise 2 was rejected!');

    reject(error);
  }, 3000);
});

// Add success and error handlers for promise1
promise1.then((message) => {
  appendMessage(message);
}).catch((error) => {
  appendError(error);
});

// Add success and error handlers for promise2
promise2.then((message) => {
  appendMessage(message);
}).catch((error) => {
  appendError(error);
});

// Function to append a div with the message to the body
function appendMessage(message) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = message;
  document.body.appendChild(div);
}

// Function to append a div with the error message to the body
function appendError(error) {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.innerText = error;
  document.body.appendChild(div);
}
