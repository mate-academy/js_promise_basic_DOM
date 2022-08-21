'use strict';

const logo = document.querySelector('.logo');

const successHandler = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
};

const errorHandler = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
};

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});

promise1
  .then(successHandler)
  .catch(errorHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2
  .then(successHandler)
  .catch(errorHandler);
