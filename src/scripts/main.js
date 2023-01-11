'use strict';

const logo = document.querySelector('.logo');
const resolveMessage = 'Promise was resolved!';
const rejectMessage = 'Promise was rejected!';
const messageClass = 'message';
const errorMessageClass = 'error-message';

function createMessage(className, message) {
  const bodyElement = document.querySelector('body');

  bodyElement.insertAdjacentHTML('beforeend', `
    <div class="${className}">${message}</div>
  `);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(resolveMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(rejectMessage);
  }, 3000);
});

promise1
  .then((result) => createMessage(messageClass, result))
  .catch(() => createMessage(`${messageClass} ${errorMessageClass}`, null));

promise2
  .then(() => createMessage(messageClass, null))
  .catch(
    (result) => createMessage(`${messageClass} ${errorMessageClass}`, result));
