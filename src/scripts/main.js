'use strict';

// Знаходимо елемент з класом .logo
const logo = document.querySelector('.logo');

// Створюємо promise1 — він буде виконаний (resolve) по кліку на .logo
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// Створюємо promise2 — він буде відхилений (reject) через 3 секунди
// eslint-disable-next-line promise/param-names
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

// Функція для створення повідомлення про успіх
function showSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
}

// Функція для створення повідомлення про помилку
function showError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
}

// Додаємо success та error handlers для promise1
promise1.then(showSuccess).catch(showError);

// Додаємо success та error handlers для promise2
promise2.then(showSuccess).catch(showError);
