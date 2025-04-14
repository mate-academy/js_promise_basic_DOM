'use strict';

const logo = document.querySelector('.logo');

// Обіцянка 1: вирішується після кліку
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// Обіцянка 2: відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;

    if (success) {
      resolve();
    } else {
      reject(new Error('Promise2 rejected'));
    }
  }, 3000);
});

// Функція для додавання повідомлення в DOM
function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message' + (isError ? ' error-message' : '');
  div.textContent = text;
  document.body.appendChild(div);
}

// Обробка promise1
promise1
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', true));

// Обробка promise2
promise2
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', true));
