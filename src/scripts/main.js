'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function promiseResolve(messageText) {
  const message = document.createElement('div');

  message.classList.add('message');

  const text = document.createElement('p');

  text.textContent = messageText;
  message.append(text);
  body.append(message);
}

function promiseReject(messageText) {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');

  const text = document.createElement('p');

  text.textContent = messageText;
  message.append(text);
  body.append(message);
}

promise1.then((result) => promiseResolve(result));
promise2.catch((error) => promiseReject(error));
