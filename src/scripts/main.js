'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function createMessage(className, text) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  })
  .catch(() => {
    createMessage('message error-message', 'Promise was rejected!');
  });

promise2
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  })
  .catch(() => {
    createMessage('message error-message', 'Promise was rejected!');
  });
