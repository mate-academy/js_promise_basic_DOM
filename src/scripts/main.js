'use strict';

const logo = document.querySelector('.logo');
const successMessage = 'Promise was resolved!';
const errorMessage = 'Promise was rejected!';

function addElement(message, className) {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="${className}">${message}</div>
  `);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(successMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

promise1
  .then((result) => addElement(result, 'message'));

promise2
  .catch((result) => addElement(result, 'message error-message'));
