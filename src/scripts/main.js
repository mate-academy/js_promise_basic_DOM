'use strict';

// write your code here
const logo = document.querySelector('.logo');

let promise1;

if (logo) {
  promise1 = new Promise((resolve) => {
    logo.addEventListener('click', resolve, { once: true });
  });
} else {
  promise1 = Promise.reject(new Error('Logo element not found'));
}

// Promise 2 — відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Обробник успіху
function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

// Обробник помилки
function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

// Додаємо обробники до обох промісів
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
// що не так в цьому демо https://YMolchanov.github.io/js_promise_basic_DOM/
