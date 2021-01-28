'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');

function addSuccess(value) {
  message.classList.add('message');
  message.textContent = value;
  document.body.append(message);
}

function addError(value) {
  message.classList.add('error-message');
  message.textContent = value;
  document.body.append(message);
}

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });

  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

firstPromise
  .then(result => {
    addSuccess(result);
  })
  .catch(error => {
    addError(error);
  });
