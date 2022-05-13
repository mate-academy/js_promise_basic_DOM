'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const createMessage = (className, text) => {
  const message = document.createElement('div');

  message.classList.add(className);
  message.innerText = text;

  document.body.appendChild(message);
};

promise1.then(result => createMessage('message', result));
promise2.catch(error => createMessage('error-message', error));
