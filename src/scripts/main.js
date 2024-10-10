'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!').message);
  }, 3000);
});

logo.addEventListener('click', () => {
  promise1.then((value) => {
    createElement('message', value);
  });
});

promise2
  .then((value) => {})
  .catch((error) => {
    createElement('message error-message', error);
  });

function createElement(className, text) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;

  document.body.insertAdjacentHTML('beforeend', div.outerHTML);
}
