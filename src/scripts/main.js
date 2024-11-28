'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(
  (resolve) => (logo.onclick = () => resolve('Promise was resolved!')),
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 3000);
});

const messageForPage = (text, extendedClass) => {
  const div = document.createElement('div');

  div.className = extendedClass ? 'message error-message' : 'message';
  div.textContent = `${text}`;
  body.appendChild(div);
};

promise1.then((message) => messageForPage(message));
promise2.catch((error) => messageForPage(error, true));
