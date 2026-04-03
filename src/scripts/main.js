'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo?.addEventListener(
    'click', // Ось тут Prettier просить перенос рядка
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

// Об'єднуємо через race
Promise.race([promise1, promise2])
  .then((message) => {
    // Спрацює, якщо клікнули швидше ніж за 3 сек
    const msg = document.createElement('div');

    msg.className = 'message';
    msg.textContent = message;
    document.body.append(msg);
  })
  .catch((message) => {
    // Спрацює, якщо пройшло 3 сек, а кліку не було
    const msg = document.createElement('div');

    msg.className = 'message error-message';
    msg.textContent = message;
    document.body.append(msg);
  });
