'use strict';

function addMessage(message, isError) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = message;

  document.body.appendChild(div);
}

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

promise1
  .then((message) => addMessage(message, false))
  .catch((error) => addMessage(error, true));

promise2
  .then((message) => addMessage(message, false))
  .catch((error) => addMessage(error, true));
