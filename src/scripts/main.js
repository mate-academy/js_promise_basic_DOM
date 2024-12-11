'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promis was rejected'));
  }, 3000);
});

const handleSuccess = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.append(div);
};

const handleError = (error) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error;
  document.body.append(div);
};

promise1.then((message) => handleSuccess(message));
promise2.catch((error) => handleError(error));
