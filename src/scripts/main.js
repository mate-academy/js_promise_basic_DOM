'use strict';

const REJECT_DELAY = 3000;
const RESOLVED_TEXT = 'Promise was resolved!';
const REJECTED_TEXT = 'Promise was rejected!';

const logo = document.querySelector('.logo');

const showMessage = (text, isError) => {
  const messageElement = document.createElement('div');

  messageElement.classList.add('message');

  if (isError) {
    messageElement.classList.add('error-message');
  }

  messageElement.textContent = text;
  document.body.append(messageElement);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(REJECTED_TEXT)), REJECT_DELAY);
});

promise1
  .then(() => showMessage(RESOLVED_TEXT, false))
  .catch(() => showMessage(REJECTED_TEXT, true));

promise2
  .then(() => showMessage(RESOLVED_TEXT, false))
  .catch(() => showMessage(REJECTED_TEXT, true));
