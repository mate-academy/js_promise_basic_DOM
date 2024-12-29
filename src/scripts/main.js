'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => addMessage('Promise was resolved!'))
  .catch((error) => addMessage(error.message, 'message error-message'));

promise2
  .then(() => addMessage('Promise was resolved!'))
  .catch((error) => addMessage(error.message, 'message error-message'));

function addMessage(text, className = 'message') {
  const div = document.createElement('div');

  div.classList.add = className;
  div.textContent = text;

  document.body.appendChild(div);
}
