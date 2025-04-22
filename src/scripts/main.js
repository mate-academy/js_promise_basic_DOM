'use strict';

/// Створення promise1: виконується при кліку на елемент ".logo"
const promise1 = new Promise((resolve, reject) => {
  const logoElement = document.querySelector('.logo');

  if (logoElement) {
    logoElement.addEventListener('click', () => {
      resolve();
    });
  } else {
    // Якщо ".logo" не знайдено – відхиляємо з помилкою
    reject(new Error('Logo element not found'));
  }
});

// Обробка promise1: успіх – додає <div class="message">,
// помилка – <div class="message error-message">
promise1
  .then(() => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(successDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errorDiv);
  });

// promise2: відхиляється через 3 секунди з помилкою
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 was rejected after 3 seconds'));
  }, 3000);
});

// Обробка promise2: успіх – додає повідомлення,
// помилка – додає повідомлення про відхилення
promise2
  .then(() => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(successDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errorDiv);
  });
