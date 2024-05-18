'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function handlerPromises(promise) {
  promise
    .then(() => {
      body.insertAdjacentHTML(
        'beforeend',
        `<div class="message">Promise was resolved!</div>`,
      );
    })
    .catch(() => {
      body.insertAdjacentHTML(
        'beforeend',
        `<div class="message error-message">Promise was rejected!</div>`,
      );
    });
}

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    resolve();
  });

  handlerPromises(promise1);

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  handlerPromises(promise2);
});
