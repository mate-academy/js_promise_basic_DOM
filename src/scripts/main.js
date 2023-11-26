'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const success = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
  `);
};
const errorMessage = () => {
  body.insertAdjacentHTML('beforeend', `
  <div class="message error-message">Promise was rejected!</div>
`);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(success)
  .catch(errorMessage);

promise2
  .then(success)
  .catch(errorMessage);
