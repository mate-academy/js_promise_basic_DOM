'use strict';

function createMessage(className, text) {
  const message = document.createElement('div');

  message.innerText = text;
  message.classList = className;

  document.body.append(message);
}

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => {
  createMessage('message', 'Promise was resolved!');
});

promise2.catch(() => {
  createMessage('message error-message', 'Promise was rejected!');
});
