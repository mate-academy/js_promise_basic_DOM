'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo')
    .addEventListener('click', () => {
      resolve();
    });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const successMessage = () => {
  document.querySelector('body')
    .insertAdjacentHTML('beforeEnd', `
  <div class="message">Promise was resolved!</div>
`);
};

const errorMessage = () => {
  document.querySelector('body')
    .insertAdjacentHTML('beforeEnd', `
  <div class="error-message">Promise was rejected!</div>
`);
};

promise1
  .then(successMessage)
  .catch(errorMessage);

promise2
  .then(successMessage)
  .catch(errorMessage);
