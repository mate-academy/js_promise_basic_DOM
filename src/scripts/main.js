'use strict';

const logo = document.querySelector('.logo');

const createMessage = (text, className) => {
  const message = document.createElement('div');

  message.textContent = text;
  message.className = className;
  document.body.append(message);
};

const firstPromise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

firstPromise.then(value => createMessage(value, 'message'));

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

secondPromise.catch(error => createMessage(error, 'message error-message'));
