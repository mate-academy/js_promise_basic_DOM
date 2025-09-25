'use strict';

const logo = document.querySelector('.logo');

function addMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.appendChild(div);
}

const promise1 = new Promise((resolve, reject) => {
  if (!logo) {
    reject(new Error('`.logo` element not found'));

    return;
  }
  logo.addEventListener('click', () => resolve(), { once: true });
});

promise1
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Rejected after 3s'));
  }, 3000);
});

promise2
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));
