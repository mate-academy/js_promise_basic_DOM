'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  createMessage();
});

promise2.catch((error) => {
  createMessage(error);
});

function createMessage(error) {
  const message = document.createElement('div');

  message.className = error ? 'message error-message' : 'message';
  message.innerText = error ? error.message : 'Promise was resolved!';
  document.body.appendChild(message);
}
