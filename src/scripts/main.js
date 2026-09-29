'use strict';

const LOGO_SELECTOR = '.logo';
const MESSAGE_CLASS = 'message';
const ERROR_MESSAGE_CLASS = 'error-message';
const RESOLVED_MESSAGE = 'Promise was resolved!';
const REJECTED_MESSAGE = 'Promise was rejected!';
const REJECTION_DELAY = 3000;

const logo = document.querySelector(LOGO_SELECTOR);

function showMessage(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add(MESSAGE_CLASS);

  if (isError) {
    message.classList.add(ERROR_MESSAGE_CLASS);
  }

  message.textContent = text;
  document.body.append(message);
}

function handleSuccess() {
  showMessage(RESOLVED_MESSAGE);
}

function handleError() {
  showMessage(REJECTED_MESSAGE, true);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve, { once: true });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, REJECTION_DELAY);
});

promise1.then(handleSuccess, handleError);
promise2.then(handleSuccess, handleError);
