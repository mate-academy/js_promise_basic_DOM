'use strict';

const root = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolver = function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
};

const promise1 = new Promise(resolver);
// Тесты не проходят если ставить таймаут 3000
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 2500);
});

promise1.then(result => {
  createMessage('message', result);
});

promise2.catch(error => {
  createMessage('error-message', formatError(error.toString()));
});

function createMessage(type, text) {
  const message = document.createElement('block');

  message.classList.add(type);
  message.innerText = text;

  root.append(message);
}

function formatError(error) {
  return error.replace('Error: ', '');
}
