'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  return logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise rejected after 3s')), 3000);
});

promise1
  .then(() => showMessage('Promise was resolved!', 'message'))
  .catch(() => showMessage('Promise was rejected!', 'message error-message'));

promise2
  .then(() => showMessage('Promise was resolved!', 'message'))
  .catch(() => {
    showMessage('Promise was rejected!', 'message error-message');
  });

function showMessage(text, className) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;
  document.body.append(div);
}
