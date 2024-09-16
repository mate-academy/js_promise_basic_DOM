'use strict';

const createMessage = (text, isError) => {
  const message = document.createElement('div');

  message.classList.add('message', isError ? 'error-message' : '');
  message.textContent = text;
  document.body.appendChild(message);
};

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  createMessage('Promise was resolved!');
}).catch((error) => {
  createMessage(error.message, true);
});

promise2.then(() => {
  createMessage('Promise was resolved!');
}).catch((error) => {
  createMessage(error.message, true);
});
