'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('I have no idea what is happenninng here.');
  }, 3000);
});

const resolveHandler = () => {
  const resolveMessage = document.createElement('div');

  resolveMessage.className = 'message';
  resolveMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(resolveMessage);
};

const rejectHandler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1.then(resolveHandler).catch(rejectHandler);
promise2.then(resolveHandler).catch(rejectHandler);
