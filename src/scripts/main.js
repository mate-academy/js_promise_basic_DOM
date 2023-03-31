'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function addElement(message, text) {
  body.insertAdjacentHTML('beforeend', `

    <div class="${message}">${text}</div>
 `);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => reject(new Error('error')), 3000);
  });
});

promise1
  .then(() => {
    addElement('message', 'Promise was resolved!');
  });

promise2
  .catch(() => {
    addElement('error-message', 'Promise was rejected!');
  });
