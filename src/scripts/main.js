'use strict';

// Знаходимо наш логотип
const logoElement = document.querySelector('.logo');

// Створюємо promise1, який виконується по кліку на логотип
const promise1 = new Promise((resolve, reject) => {
  logoElement.addEventListener('click', () => {
    resolve(); // Обіцянку виконано при кліку
  });
  // Для promise1 ми не передбачали reject в його визначенні,
});

// Створюємо promise2, який відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected by timer after 3 seconds'));
  }, 3000);
});

// Обробники для promise1
promise1
  .then(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message');
    newDiv.textContent = 'Promise was resolved!'; // Уточнимо, що це promise1
    document.body.appendChild(newDiv);
  })
  .catch(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message', 'error-message');
    newDiv.textContent = 'Promise was rejected!'; // Уточнимо, що це promise1
    document.body.appendChild(newDiv);
  });

// Обробники для promise2
promise2
  .then(() => {
    // Цей блок для promise2, ймовірно, ніколи не виконається,
    // оскільки promise2 завжди відхиляється (rejects).
    const newDiv = document.createElement('div');

    newDiv.classList.add('message');
    newDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(newDiv);
  })
  .catch(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message', 'error-message');
    newDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(newDiv);
  });
