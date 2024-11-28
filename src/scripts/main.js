/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function appendMessage(msgText, extraClass = '') {
  const message = document.createElement('div');

  message.className = 'message' + (extraClass ? ' ' + extraClass : '');
  message.textContent = msgText;
  body.append(message);
}

const handleSuccess = (msgText) => {
  appendMessage(msgText);
};

const handleError = (errorText) => {
  appendMessage(errorText, 'error-message');
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
})
  .then(handleSuccess)
  .catch(handleError);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
})
  .then(handleSuccess)
  .catch(handleError);
