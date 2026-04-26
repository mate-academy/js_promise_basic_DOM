'use strict'; // Увімкнення суворого режиму для запобігання помилкам

const logo = document.querySelector('.logo');
// Знаходимо елемент логотипу в DOM

// --- СТВОРЕННЯ ОБІЦЯНОК ---

// promise1: чекає на подію кліку
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    // Як тільки клік відбувся, переводимо проміс у стан "виконано" (fulfilled)
    resolve('Logo clicked!');
  });
});

// promise2: створює штучну затримку
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Через 3 секунди (3000 мс) примусово відхиляємо проміс (rejected)
    reject(new Error('Timeout reached!'));
  }, 3000);
});

// --- promice.race ---

// Promise.race приймає масив промісів і
// повертає результат того, який завершиться ПЕРШИМ
// (зараз результат нікуди не зберігається, але метод запущений)
Promise.race([promise1, promise2]);

// --- ОБРОБКА РЕЗУЛЬТАТІВ ---

// Обробник успішного завершення для першого промісу
promise1
  .then((message) => {
    // Створюємо новий тег div для повідомлення
    const resultElement = document.createElement('div');

    // Додаємо йому клас 'message' (для стилів із CSS)
    resultElement.classList.add('message');

    // Встановлюємо текстовий контент згідно з технічним завданням
    resultElement.textContent = 'Promise was resolved!';
    // Додаємо створений елемент у кінець тегу body,
    // щоб він з'явився на сторінці
    document.body.appendChild(resultElement);
  })
  .catch((error) => {
    // Створюємо елемент для виведення помилки
    const resultElement = document.createElement('div');

    // Додаємо два класи:'message' 'error-message'
    resultElement.classList.add('message', 'error-message');

    // Встановлюємо текст помилки згідно з технічним завданням
    resultElement.textContent = 'Promise was rejected!';

    // Виводимо повідомлення про помилку на сторінку
    document.body.appendChild(resultElement);
    // Спеціальний коментар для лінтера, щоб він не сварився на console.error
    // eslint-disable-next-line no-console
    console.error(error);
    // Виводимо технічну інформацію про помилку в консоль розробника
  });
// Обробник помилки для другого промісу

promise2
  .then((message) => {
    // Створюємо новий тег div для повідомлення
    const resultElement2 = document.createElement('div');

    // Додаємо йому клас 'message' (для стилів із CSS)
    resultElement2.classList.add('message');

    // Встановлюємо текстовий контент згідно з технічним завданням
    resultElement2.textContent = 'Promise was resolved!';

    // Додаємо створений елемент у кінець тегу body,
    // щоб він з'явився на сторінці
    document.body.appendChild(resultElement2);
  })
  .catch((error) => {
    // Створюємо елемент для виведення помилки
    const resultElement2 = document.createElement('div');

    // Додаємо два класи:'message' 'error-message'
    resultElement2.classList.add('message', 'error-message');

    // Встановлюємо текст помилки згідно з технічним завданням
    resultElement2.textContent = 'Promise was rejected!';

    // Виводимо повідомлення про помилку на сторінку
    document.body.appendChild(resultElement2);

    // eslint-disable-next-line no-console
    console.error(error);
    // Виводимо технічну інформацію про помилку в консоль
  });
