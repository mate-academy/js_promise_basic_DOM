'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function addMessage(textMessage, classMessage) {
  const message = document.createElement('div');

  message.className = classMessage;
  message.textContent = textMessage;

  body.append(message);
};

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1.then(() => {
  addMessage('Promise was resolved!', 'message');
});

promise2.catch(() => {
  addMessage('Promise was rejected!', 'error-message');
});
