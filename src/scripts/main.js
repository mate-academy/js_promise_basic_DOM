'use strict';

// write your code here
const logoElem = document.querySelector('.logo');

function appM(text, className = 'message') {
  const messageElem = document.createElement('div');

  messageElem.className = className;
  messageElem.textContent = text;

  document.body.appendChild(messageElem);
}

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
  appM(message);
});

promise2.catch((error) => {
  appM(error.message, 'message error-message');
});
