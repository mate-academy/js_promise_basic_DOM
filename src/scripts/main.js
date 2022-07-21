'use strict';

const logo = document.querySelector('.logo');

function message(type, text) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="${type}">${text}</div>
  `);
};

const successMessage = () => message('message', 'Promise was resolved!');
const errorMessage = () => message('error-message', 'Promise was rejected!');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(successMessage)
  .catch(errorMessage);

promise2
  .then(successMessage)
  .catch(errorMessage);
