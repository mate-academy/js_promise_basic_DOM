'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolver = (resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject();
  }, 3000);
};

const promise1 = new Promise(resolver);
const promise2 = new Promise(resolver);

promise1
  .then(result => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerText = 'Promise was resolved!';
    body.append(message);
  });

promise2
  .catch(result => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.innerText = 'Promise was rejected!';
    body.append(errorMessage);
  });
