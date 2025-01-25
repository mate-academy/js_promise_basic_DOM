'use strict';

// Функція для додавання повідомлень
function addMessage(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }
  message.textContent = text;
  document.body.appendChild(message);
}

// Обіцянка 1: виконується при кліку на ".logo"
const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// Обіцянка 2: відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Обробка promise1
promise1
  .then((message) => {
    addMessage(message); // Успішне повідомлення
  })
  .catch((error) => {
    addMessage(error, true); // Повідомлення про помилку
  });

// Обробка promise2
promise2
  .then((message) => {
    addMessage(message); // Успішне повідомлення
  })
  .catch((error) => {
    addMessage(error, true); // Повідомлення про помилку
  });
