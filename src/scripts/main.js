'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const addMessage = (message, isError = false) => {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = message;
  document.body.appendChild(div);
};

promise1
  .then((message) => addMessage(message))
  .catch((error) => addMessage(error, true));

promise2
  .then((message) => addMessage(message))
  .catch((error) => addMessage(error, true));
