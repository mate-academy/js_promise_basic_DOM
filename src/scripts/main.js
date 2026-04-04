'use strict';

const logo = document.querySelector('.logo');

// Функція для створення та відображення повідомлення (щоб не дублювати код)
function showMessage(text, isError = false) {
  const msg = document.createElement('div');

  msg.className = isError ? 'message error-message' : 'message';
  msg.textContent = text;
  document.body.append(msg);
}

const promise1 = new Promise((resolve) => {
  logo?.addEventListener(
    'click',
    () => {
      resolve('Promise was resolved!');
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Додаємо обробники окремо для кожного промісу
promise1
  .then((message) => {
    showMessage(message);
  })
  .catch((error) => {
    // Хоча promise1 зараз не має reject, catch варто додати для безпеки
    showMessage(error.message, true);
  });

promise2
  .then((message) => {
    showMessage(message);
  })
  .catch((error) => {
    // Спрацює, якщо пройшло 3 сек, а кліку не було
    // Використовуємо error.message, як просив ментор
    showMessage(error.message, true);
  });
