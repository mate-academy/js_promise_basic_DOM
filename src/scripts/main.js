'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function createMessage(text, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => {
    createMessage('Promise was resolved!');
  })
  .catch(() => {
    createMessage('Promise was rejected!', true);
  });

promise2
  .then(() => {
    createMessage('Promise was resolved!');
  })
  .catch(() => {
    createMessage('Promise was rejected!', true);
  });
