'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

const message = document.createElement('div');

promise1.then(result => {
  message.className = 'message';
  message.innerText = result;

  document.body.append(message);
});

promise2.catch(result => {
  message.className = 'error-message';
  message.classList.add('message');
  message.innerText = result;

  document.body.append(message);
});
