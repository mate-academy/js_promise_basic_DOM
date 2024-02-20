'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function eventHandler() {
  const message = document.createElement('div');

  message.className = 'message';
  body.append(message);

  return message;
}

function successHandler() {
  const message = eventHandler();

  message.innerText = 'Promise was resolved!';
};

function errorHandler() {
  const message = eventHandler();

  message.className = 'message error-message';
  message.innerText = 'Promise was rejected!';
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

promise1
  .then(() => {
    successHandler();
  })
  .catch(() => {});

promise2
  .then(() => {})
  .catch(() => {
    errorHandler();
  });
