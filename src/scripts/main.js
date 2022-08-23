'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const successHandler = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.innerText = 'Promise was resolved!';
  document.body.append(message);
};

const errorHandler = () => {
  const message = document.createElement('div');

  message.className = 'error-message';
  message.innerText = 'Promise was rejected!';
  document.body.append(message);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
