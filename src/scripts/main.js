'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1
  .then(onSuccess)
  .catch(onError);

promise2
  .then(onSuccess)
  .catch(onError);

function onSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = `Promise was resolved!`;

  body.appendChild(div);
};

function onError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = `Promise was rejected!`;

  body.appendChild(div);
};
