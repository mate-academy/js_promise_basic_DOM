'use strict';

// write your code here
const logo = document.querySelector('.logo');

function addMessage(message, isError = false) {
  const messageContainer = document.createElement('div');

  messageContainer.textContent = message;
  messageContainer.className = 'message';

  if (isError) {
    messageContainer.classList.add('error-message');
  }
  document.body.append(messageContainer);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise1.then(
  (message) => addMessage(message),
  (message) => addMessage(message, true),
);

promise2.catch((message) => addMessage(message, true));
