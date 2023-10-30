'use strict';

const button = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  button.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected'));
  }, 3000);
});

const createMessageDiv = function(className, message) {
  const createDiv = document.createElement('div');

  createDiv.className = className;
  createDiv.textContent = message;

  body.appendChild(createDiv);
};

promise1
  .then((result) => {
    createMessageDiv('message', result);
  });

promise2
  .catch(() => {
    createMessageDiv('message error-message', 'Promise was rejected!');
  });
