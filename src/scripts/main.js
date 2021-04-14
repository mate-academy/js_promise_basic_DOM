'use strict';

const logo = document.querySelector('.logo');

const addMessage = (messageText, className) => {
  const message = document.createElement('div');

  message.textContent = messageText;
  message.className = className;
  document.body.append(message);
};

const firstPromise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

firstPromise.then(value => addMessage(value, 'message'));

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

secondPromise.catch(error => addMessage(error, 'message error-message'));
