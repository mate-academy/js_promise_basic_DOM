'use strict';

const body = document.querySelector('body');

// Promises
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('No actions within 3 seconds')), 3000);
});

// Callbacks handling
promise1.then(() => successHandler()).catch(() => errorHandler());
promise2.then(() => successHandler()).catch(() => errorHandler());

function successHandler() {
  addHandlerMessage('Promise was resolved!');
}

function errorHandler() {
  addHandlerMessage('Promise was rejected!', ['error-message']);
}

function addHandlerMessage(messageText, customClasses = []) {
  const message = document.createElement('div');

  message.classList.add('message', ...customClasses);
  message.textContent = messageText;
  body.appendChild(message);
}
