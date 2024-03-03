'use strict';

// write your code here
const createDivElement = (typeMessage, result) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = typeMessage;
  messageDiv.textContent = result;
  document.body.appendChild(messageDiv);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then((message) => {
  createDivElement('message', message);
});

promise2.catch((error) => {
  createDivElement('message error-message', error);
});
