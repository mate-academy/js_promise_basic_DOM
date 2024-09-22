'use strict';

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

function appendMessage(message, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

promise1.then((message) => appendMessage(message));
promise2.catch((error) => appendMessage(error, true));
