'use strict';

const logo = document.querySelector('.logo');

function createMessage(className, text) {
  const newMessage = document.createElement('div');

  newMessage.className = className;
  newMessage.innerText = text;

  document.body.append(newMessage);
}

const resolvedPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

resolvedPromise
  .then((result) => {
    createMessage('message', result);
  });

rejectedPromise
  .catch((error) => {
    createMessage('error-message', error);
  });
