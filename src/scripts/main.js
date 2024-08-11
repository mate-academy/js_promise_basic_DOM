'use strict';

const logo = document.querySelector('.logo');

const promiseOne = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const resultHandler = (message, isError = false) => {
  const resultMessage = document.createElement('div');

  resultMessage.className = isError ? 'message error-message' : 'message';

  resultMessage.textContent = message;

  document.body.appendChild(resultMessage);
};

promiseOne
  .then((message) => resultHandler(message))
  .catch((error) => {
    resultHandler(error.message, true);
  });

promiseTwo
  .then((message) => resultHandler(message))
  .catch((error) => {
    resultHandler(error.message, true);
  });
