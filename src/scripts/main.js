'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolver = (resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
};

const promise1 = new Promise(resolver);

const rejector = (reject) => {
  setTimeout(reject(), 3000);
};

const promise2 = new Promise(rejector);

promise1
  .then(result => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerText = 'Promise was resolved!';
    body.append(message);
  });

promise2
  .then(result => {
    const message = document.createElement('div');

    message.className = 'error-message';
    message.innerText = 'Promise was rejected!';
    body.append(message);
  });
