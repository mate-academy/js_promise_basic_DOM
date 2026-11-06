'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handleSuccess = (text) => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = text;
  document.body.append(message);
};

const handleError = (error) => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = error.message;
  document.body.append(message);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
