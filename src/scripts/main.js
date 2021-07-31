'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const showMessage = (promiseStatus) => {
  const message = document.createElement('div');

  promiseStatus === 'resolved'
    ? message.className = 'message'
    : message.className = 'error-message';

  message.textContent = `Promise was ${promiseStatus}!`;

  body.append(message);
};

const resolvedPromise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

resolvedPromise.then(() => showMessage('resolved'));

rejectedPromise.catch(() => showMessage('rejected'));
