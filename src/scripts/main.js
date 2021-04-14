'use strict';

const title = document.querySelector('.logo');
const body = document.body;

const createMessage = (className, content) => (
  body.insertAdjacentHTML('beforeend', `
    <div class="${className}">${content}</div>
  `)
);

new Promise((resolve) => {
  title.addEventListener('click', () => {
    resolve();
  });
})
  .then(() => (
    createMessage('message', 'Promise was resolved!')
  ));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('rejected'));
  }, 3000);
})
  .catch(() => (
    createMessage('message error-message', 'Promise was rejected!')
  ));
