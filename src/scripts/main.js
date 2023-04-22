'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const successHandler = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};
const errorHandler = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was rejected!
    </div>
  `);
};

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
