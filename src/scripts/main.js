'use strict';

// write your code here
const logo = document.querySelector('.logo');

function deletingPreviousMessage() {
  const message = document.querySelector('[class ~= "message"]');

  if (message) {
    message.remove();
  }
}

function successMessage() {
  deletingPreviousMessage();

  const message = document.createElement('div');

  message.classList.add('message');

  if (message.classList.contains('error-message')) {
    message.classList.toggle('error-message');
  }

  message.innerText = `Promise was resolved!`;
  document.body.appendChild(message);
}

function errorMessage() {
  deletingPreviousMessage();

  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add('error-message');
  message.innerText = `Promise was rejected!`;
  document.body.appendChild(message);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error!'));
  }, 3000);
});

promise1.then(successMessage).catch(errorMessage);
promise2.then(successMessage).catch(errorMessage);
