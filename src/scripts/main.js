'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function addMessage(message, error = false) {
  const div = document.createElement('div');

  if (error) {
    div.classList.add('message');
  } else {
    div.classList.add('message', 'error-message');
  }

  div.textContent = message;

  document.body.appendChild(div);
}

promise1.then((message) => addMessage(message, true));
promise2.catch((message) => addMessage(message));
