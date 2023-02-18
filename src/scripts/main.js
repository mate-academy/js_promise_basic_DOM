'use strict';

// write your code here

const logoMa = document.querySelector('.logo');
const body = document.querySelector('body');

function showMessage(text, className = '') {
  body.insertAdjacentHTML(
    'afterbegin', `
      <div class="message ${className}">${text}<div>
    `);
}

const promise1 = new Promise((resolve, reject) => {
  logoMa.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(
    () => {
      showMessage('Promise was resolved!');
    });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise2
  .then()
  .catch(() => {
    showMessage('Promise was rejected!', 'error-message');
  });
