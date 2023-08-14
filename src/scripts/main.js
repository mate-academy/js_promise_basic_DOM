'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const resolver = (resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject();
  }, 3000);
};

function successHandler() {
  const message = document.createElement('div');

  message.className = 'message';
  body.append(message);
  message.textContent = 'Promise was resolved!';
}

function errorHandler() {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  body.append(errorMessage);
  errorMessage.textContent = 'Promise was rejected!';
}

const promise1 = new Promise(resolver);
const promise2 = new Promise(resolver);

promise1.then(successHandler);
promise2.catch(errorHandler);
