'use strict';

const root = document.body;
const logo = document.querySelector('.logo');
const successBlock = '<div class="message">Promise was resolved!</div>';
const errorBlock = `
  <div class="message error-message">
    Promise was rejected!
  </div>`;

new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
}).then(() => {
  root.insertAdjacentHTML('beforeend', successBlock);
});

new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      reject(new Error());
    }, 3000);
  });
}).catch(() => {
  root.insertAdjacentHTML('beforeend', errorBlock);
});
