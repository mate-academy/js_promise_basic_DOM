'use strict';

const promise1 = new Promise(function (resolve) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //  resolve = () => {};
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const successHandel = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
};

const errorHandel = (error) => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = error;
  document.body.appendChild(errorMessage);
};

promise1.then(successHandel).catch(errorHandel);
promise2.then(successHandel).catch(errorHandel);
