'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const success = () => {
  logo.insertAdjacentHTML('afterend', `
    <div class="message">Promise was resolved!</div>
  `);
};

const error = () => {
  logo.insertAdjacentHTML('afterend', `
    <div class="error-message">Promise was rejected!</div>
  `);
};

promise1
  .then(success)
  .catch(error);

promise2
  .then(success)
  .catch(error);
