'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const createMessage = (className, innerText) => {
  const message = document.createElement('div');

  message.className = className;
  message.innerText = innerText;

  return message;
};

const resolveMessage = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

resolveMessage.then(() => body.append(
  createMessage('message', 'Promise was resolved!')));

const errorMessage = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

errorMessage.catch(() => body.append(createMessage(
  'message error-message', 'Promise was rejected!'
)));
