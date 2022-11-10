/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

const addMessage = (message, className) => {
  const div = document.createElement('div');

  div.innerText = message;
  div.classList.add(className);
  document.body.append(div);
};

promise1.then(() => {
  addMessage('Promise was resolved!', 'message');
}).catch(() => addMessage('Promise was rejected!', 'error-message'));

promise2.then(() => {
  addMessage('Promise was resolved!', 'message');
}).catch(() => addMessage('Promise was rejected!', 'error-message'));
