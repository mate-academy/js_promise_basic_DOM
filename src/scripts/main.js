'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Some error message'));
  }, 3000);
});

function addMessage(text, isError = false) {
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
