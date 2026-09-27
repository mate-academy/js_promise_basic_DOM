'use strict';

// Создайте два промиса: `promise1` и `promise2`.
// - `promise1` должен переходить в состояние «выполнено»
//  (resolved) при клике на элемент с классом `.logo`.
// - `promise2` должен переходить в состояние «отклонено»
//  (rejected) через 3 секунды.
// - Добавьте обработчики успеха и ошибки для обоих промисов.
// - Обработчик успеха должен добавлять в `body` элемент
// `<div class="message">` с текстом «Promise was resolved!».
// - Обработчик ошибки должен добавлять в `body` элемент
// `<div class="message error-message">` с текстом «Promise was rejected!».

const logo = document.querySelector('.logo');

function createMessage(text, isError = false) {
  const className = isError ? 'message error-message' : 'message';

  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="${className}">${text}</div>`,
  );
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener(
    'click',
    (e) => {
      resolve();
    },
    { once: true },
  );
});

promise1
  .then(() => createMessage('Promise was resolved!'))
  .catch(() => createMessage('Promise was rejected!', true));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise2
  .then(() => createMessage('Promise was resolved!'))
  .catch(() => createMessage('Promise was rejected!', true));
