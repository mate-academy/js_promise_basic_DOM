'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promiseOne = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function createMessage(text, isErr = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isErr) {
    message.classList.add('error-message');
  }

  message.textContent = text;

  document.body.appendChild(message);
}

promiseOne
  .then((message) => createMessage(message))
  .catch((error) => createMessage(error.message, true));

promiseTwo
  .then((message) => createMessage(message))
  .catch((error) => createMessage(error.message, true));
