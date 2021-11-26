'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const successMessage = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.innerHTML = 'Promise was resolved!';

  body.append(message);
};

const errorMessage = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.innerHTML = 'Promise was rejected!';

  body.append(message);
};

promise1
  .then(successMessage)
  .catch(errorMessage);

promise2
  .then(successMessage)
  .catch(errorMessage);
