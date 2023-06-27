'use strict';

const logo = document.querySelector('.logo');

const success = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
};

const error = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Promise was rejected!';

  document.body.append(errorMessage);
};

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 3000);
});

promise1.then(success);
promise2.catch(error);
