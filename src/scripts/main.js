'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  promise1.resolve();
});

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const handleSuccess = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
};

const handleError = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
