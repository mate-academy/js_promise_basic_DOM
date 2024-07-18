'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

function addMessage(message, isError = false) {
  const body = document.body;
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = message;
  body.appendChild(div);
}

promise1
  .then(() => {
    addMessage('Promise was resolved!');
  })
  .catch(() => {
    addMessage('Promise was rejected!', true);
  });

promise2
  .then(() => {
    addMessage('Promise was resolved!');
  })
  .catch(() => {
    addMessage('Promise was rejected!', true);
  });
