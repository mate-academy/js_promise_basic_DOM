'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function createMessageElement(className) {
  const element = document.createElement('div');

  element.className = className;

  return element;
}

function promiseResult(promise) {
  promise
    .then((text) => {
      const message = createMessageElement('message');

      message.textContent = text;
      document.body.appendChild(message);
    })
    .catch((error) => {
      const message = createMessageElement('message error-message');

      message.textContent = error.message;
      document.body.appendChild(message);
    });
}

promiseResult(promise1);
promiseResult(promise2);
