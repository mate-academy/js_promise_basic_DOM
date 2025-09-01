'use strict';

const logo = document.querySelector('.logo');

// promise1 – виконується при кліку на .logo
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

// promise2 – відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

// функція для додавання повідомлення
function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.append(div);
}

// обробники для promise1
promise1
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', true));

// обробники для promise2
promise2
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', true));
