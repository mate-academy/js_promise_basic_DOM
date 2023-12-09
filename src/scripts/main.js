'use strict';

const bodyElement = document.body;
const logo = document.querySelector('.logo');

function addMessage(className, message) {
  bodyElement.insertAdjacentHTML('beforeend', `
    <div class="message ${className}">${message}</div>
  `);
}

const promise1 = Promise.resolve('Promise was resolved!');

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .catch((error) => {
    addMessage('error-message', error.message);
  });

logo.addEventListener('click', () => {
  promise1
    .then((message) => addMessage('success', message))
    .catch((error) => addMessage('error-message', error));
});
