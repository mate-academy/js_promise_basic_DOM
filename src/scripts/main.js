'use strict';

const body = document.body;
const logo = document.querySelector('.logo');
const revolvedMessage = 'Promise was resolved!';
const errorMessage = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  body.insertAdjacentHTML('beforeend', `<div class="message">
    ${revolvedMessage}
  </div>`);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise2.catch(() => {
  body.insertAdjacentHTML('beforeend', `<div class="message error-message">
    ${errorMessage}
  </div>`);
});
