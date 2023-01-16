'use strict';

const body = document.body;
const message = document.createElement('div');

function createPromise() {
  const logo = document.querySelector('.logo');
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });

    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        reject('Promise was rejected!');
      }, 3000);
    });
  };

  return new Promise(resolver);
}

const promise1 = createPromise();
const promise2 = createPromise();

promise1
  .then(result => {
    message.className = 'message';
    message.textContent = result;
    body.append(message);
  });

promise2
  .catch(error => {
    message.className = 'error-message';
    message.textContent = error;
    body.append(message);
  });
