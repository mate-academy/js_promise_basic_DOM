'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Створюємо перший Promise, який вирішується при кліку на .logo
  const promise1 = new Promise((resolve) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      resolve();
    });
  });

  // Створюємо другий Promise, який відхиляється через 3 секунди

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  // Обробник успіху
  const success = () => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    document.body.appendChild(message);
  };

  // Обробник помилок
  const error = () => {
    const message = document.createElement('div');

    message.className = 'message error-message';
    message.textContent = 'Promise was rejected!';
    document.body.appendChild(message);
  };

  // Додаємо обробники до promise1 та promise2
  promise1.then(success).catch(error);
  promise2.then(success).catch(error);
});
