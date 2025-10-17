'use strict';

// promise1 — виконується при кліку на .logo
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// promise2 — відхиляється через 3 секунди після завантаження сторінки
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Обробники
function onSuccess(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

function onError(error) {
  const message = error instanceof Error ? error.message : error;
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = message;
  document.body.appendChild(div);
}

// Підключаємо обробники до обіцянок
promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
