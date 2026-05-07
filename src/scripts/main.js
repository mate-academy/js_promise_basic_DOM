'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

function createMessage(text) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (text === 'Promise was rejected!') {
    div.classList.add('error-message');
  }

  div.textContent = text;
  body.append(div);
}

promise1.then(() => {
  createMessage('Promise was resolved!');
});

promise1.catch(() => {
  createMessage('Promise was rejected!');
});

promise2.then(() => {
  createMessage('Promise was resolved!');
});

promise2.catch(() => {
  createMessage('Promise was rejected!');
});
