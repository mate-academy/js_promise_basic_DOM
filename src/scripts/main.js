'use strict';

const logo = document.querySelector('.logo');

const createMessage = (className, message) => (
  document.body.insertAdjacentHTML('beforeend', `
    <div class="${className}">${message}</div>
  `
  )
);

new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
})
  .then(() => (
    createMessage('message', 'Promise was resolved!')
  ));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
})
  .catch(() => (
    createMessage('message error-message', 'Promise was rejected!')
  ));
