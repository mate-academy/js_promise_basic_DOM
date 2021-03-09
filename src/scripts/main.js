'use strict';

// write your code here

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const resolveMessage = document.createElement('DIV');
const rejectMessage = document.createElement('DIV');

resolveMessage.classList.add('message');
rejectMessage.classList.add('message', 'error-message');

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

firstPromise
  .then((messageText) => {
    resolveMessage.innerText = messageText;
    body.prepend(resolveMessage);
  });

secondPromise
  .catch((error) => {
    rejectMessage.innerText = error;
    body.prepend(rejectMessage);
  });
