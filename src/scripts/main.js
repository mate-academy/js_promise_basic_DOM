'use strict';

// знаходимо елемент .logo
const logo = document.querySelector('.logo');

// функція для повідомлення про успіх
function successHandler() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
}

// функція для повідомлення про помилку
function errorHandler() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
}

// Promise 1 (виконується після кліку)
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// Promise 2 (відхиляється через 3 секунди)
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected'));
  }, 3000);
});

// обробники
promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
