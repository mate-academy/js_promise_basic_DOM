'use strict';

// Функція для створення та відображення повідомлення
function showMessage(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }
  message.textContent = text;
  document.body.appendChild(message);

  // Видалення повідомлення через 2 секунди
  setTimeout(() => {
    message.remove();
  }, 2000);
}

// Створюємо promise1: виконується при кліку на .logo
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

// Створюємо promise2: відхиляється через 3 секунди з передачею об'єкта Error
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!')); // Використовуємо Error
  }, 3000);
});

// Обробник успішного виконання promise1
promise1.then(() => {
  showMessage('Promise was resolved!');
});

// Обробник помилки для promise2
promise2.catch((error) => {
  showMessage(error.message, true);
});
