'use strict';

// Оголошуємо глобально для тестів
let promise1;
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

window.promise2 = promise2; // доступ для тестів

// --- PROMISE 1 ---
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  promise1 = new Promise((resolve) => {
    if (!logo) {
      // Якщо елемента немає, проміс ніколи не резолвиться
      return;
    }

    const handleClick = () => {
      resolve();
      logo.removeEventListener('click', handleClick);
    };

    logo.addEventListener('click', handleClick);
  });

  window.promise1 = promise1; // доступ для тестів

  // Додаємо обробники для promise1 тільки після його створення
  promise1
    .then(() => {
      showMessage('Promise was resolved!');
    })
    .catch(() => {
      showMessage('Promise was rejected!', true);
    });
});

// --- HELPER ---
function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = text;
  document.body.appendChild(div);
}

// --- HANDLERS for promise2 ---
promise2
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch((err) => {
    showMessage(err.message, true);
  });

// -----------------------------------------------------------------------------

// // Отримуємо елемент .logo
// const logo = document.querySelector('.logo');

// // --- PROMISE 1 ---
// // Створюємо проміс, який буде "resolved" (успішно виконаний),
// // коли користувач клікне на елемент .logo
// const promise1 = new Promise((resolve) => {
//   logo.addEventListener('click', () => {
//     // передаємо повідомлення
//     resolve('Promise was resolved!');
//   });
// });

// // --- PROMISE 2 ---
// // Створюємо проміс, який буде "rejected" (відхилений, з помилкою)
// // через 3 секунди після завантаження сторінки
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // передаємо помилку
//     reject(new Error('Promise was rejected!'));
//   }, 3000);
// });

// // Допоміжна функція для створення повідомлень
// function showMessage(text, isError = false) {
//   const div = document.createElement('div');

//   div.classList.add('message');

//   if (isError) {
//     div.classList.add('error-message');
//   }
//   div.textContent = text;
//   document.body.appendChild(div);
// }

// // --- ОБРОБНИКИ PROMISE 1 ---
// // .then() викликається, якщо проміс виконався успішно (resolve)
// // .catch() викликається, якщо проміс відхилився (reject)
// promise1
//   .then((message) => {
//     // message === 'Promise was resolved!' з resolve()
//     showMessage(message);
//   })
//   .catch((err) => {
//     // тут так само, як у promise2, можна ловити err.message
//     showMessage(err.message || 'Promise was rejected!', true);
//   });

// // --- ОБРОБНИКИ PROMISE 2 ---
// promise2
//   .then((message) => {
//     // message === що передали у resolve (якщо б був resolve)
//     showMessage(message);
//   })
//   .catch((err) => {
//     // err — це Error з reject(new Error(...))
//     showMessage(err.message, true);
//   });
