'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

function createMessage(text, type) {
  const message = document.createElement('div');

  message.className = 'message';
  message.classList.add(type);
  message.textContent = text;

  document.body.append(message);
}

function onSuccess() {
  createMessage('Promise was resolved!', 'message');
}

function onError() {
  createMessage('Promise was rejected!', 'error-message');
}

promise1
  .then(onSuccess);

promise2
  .then()
  .catch(onError);
