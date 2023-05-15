'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 3000);
});

const success = () => {
  document.body.insertAdjacentHTML('beforeend',
    `<div class="message">Promise was resolved!</div>`
  );
};

const error = () => {
  document.body.insertAdjacentHTML('beforeend',
    `<div class="message error-message">Promise was rejected!</div>`
  );
};

promise1
  .then(success)
  .catch(error);

promise2
  .then(success)
  .catch(error);
