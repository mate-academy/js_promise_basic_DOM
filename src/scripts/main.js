'use strict';

// write your code here
const logoElem = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logoElem.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((message) => {
  const messageElem = document.createElement('div');

  messageElem.className = 'message';
  messageElem.textContent = message;

  document.body.appendChild(messageElem);
});

promise2.catch((error) => {
  const errorElem = document.createElement('div');

  errorElem.className = 'message error-message';
  errorElem.textContent = error.message;

  document.body.appendChild(errorElem);
});
