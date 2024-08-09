'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
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

promise1
  .then((message) => resultHandler(message))
  .catch((error) => {
    resultHandler(error.message, true);
  });

promise2
  .then((message) => resultHandler(message))
  .catch((error) => {
    resultHandler(error.message, true);
  });
