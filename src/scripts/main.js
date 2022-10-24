'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(data => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">
      ${data}
    </div>`);
});

promise2.catch(data => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">
      ${String(data).replace('Error: ', '')}
    </div>`);
});
