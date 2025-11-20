'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

// 1) Створюємо promise1 — резолв при кліку
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});
// 3) Обробка успіху promise1

promise1.then(() => {
  const divResolved = document.createElement('div');

  divResolved.classList.add('message');
  divResolved.textContent = 'Promise was resolved!';
  body.appendChild(divResolved);
});

promise1.catch(() => {
  const divResolved = document.createElement('div');

  divResolved.classList.add('message');
  divResolved.textContent = 'Promise was resolved!';
  body.appendChild(divResolved);
});

// 2) Створюємо promise2 — reject через 3 сек
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Advice was not entered within 3 seconds'));
  }, 3000);
});

promise2.then(() => {
  const divRejected = document.createElement('div');

  divRejected.classList.add('message', 'error-message');
  divRejected.textContent = 'Promise was rejected!';
  body.appendChild(divRejected);
});

// 4) Обробка помилки promise2
promise2.catch(() => {
  const divRejected = document.createElement('div');

  divRejected.classList.add('message', 'error-message');
  divRejected.textContent = 'Promise was rejected!';
  body.appendChild(divRejected);
});
