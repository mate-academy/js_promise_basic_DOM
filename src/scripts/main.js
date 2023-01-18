'use strict';

const body = document.body;

function createPromise() {
  const logo = document.querySelector('.logo');
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  };

  return new Promise(resolver);
}

function createPromise2() {
  const resolver = (resolve, reject) => {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        reject('Promise was rejected!');
      }, 3000);
    });
  };

  return new Promise(resolver);
}

const promise1 = createPromise();
const promise2 = createPromise2();

function appendMessage(textOfMessage, classOfMessage = '') {
  const message = document.createElement('div');

  message.className = 'message';

  if (classOfMessage.length !== 0) {
    message.classList.add(classOfMessage);
  }
  message.textContent = textOfMessage;
  body.append(message);
};

promise1
  .then(result => {
    appendMessage(result);
  });

promise2
  .catch(error => {
    appendMessage(error, 'error-message');
  });
