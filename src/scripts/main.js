'use strict';

const root = document.querySelector('body');
const logo = document.querySelector('.logo');

function createPromise() {
  const resolver = function(resolve, reject) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  };

  return new Promise(resolver);
}

const promise1 = createPromise();
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(result => {
  createMessage('message', result);
});

promise2.catch(error => {
  createMessage('error-message', error);
});

function createMessage(type, text) {
  const message = document.createElement('block');

  message.classList.add(type);
  message.innerText = text;

  root.append(message);
}
