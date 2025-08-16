'use strict';

// Проміс який буде виконаний при кліку на логотип
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// Проміс який буде виконаний через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Функція для обробки успішного виконання промісу
function handleSuccess(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

// Функція для обробки помилок виконання промісу
function handleError(error) {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error.message;
  document.body.appendChild(div);
}

// Виклик промісів та обробка результатів
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
