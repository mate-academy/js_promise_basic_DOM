'use strict';

// Створення promise1: виконується при кліку на елемент ".logo"
const promise1 = new Promise((resolve, reject) => {
  const logoElement = document.querySelector('.logo');

  if (logoElement) {
    logoElement.addEventListener('click', () => {
      resolve();
    });
  } else {
    // Якщо ".logo" не знайдено – відхиляємо з повідомленням
    reject(new Error('Logo element not found'));
  }
});

// Обробка promise1: успіх – додає <div class="message">,
// помилка – <div class="message error-message"> з текстом помилки
promise1
  .then(() => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(successDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = `Promise was rejected! ${error.message}`;
    document.body.appendChild(errorDiv);
  });

// promise2: відхиляється через 3 секунди з повідомленням
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 was rejected after 3 seconds'));
  }, 3000);
});

// Обробка promise2: успіх – повідомлення,
// помилка – повідомлення про відхилення з error.message
promise2
  .then(() => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(successDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = `Promise was rejected! ${error.message}`;
    document.body.appendChild(errorDiv);
  });
