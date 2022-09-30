'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const body = document.querySelector('body');

function successNotification() {
  body.insertAdjacentHTML('beforeend', `
  <div class="message">
    Promise was resolved!
  </div>`);
}

function errorNotification() {
  body.insertAdjacentHTML('beforeend', `
  <div class="error-message">
    Promise was rejected!
  </div>`);
}

promise1
  .then(successNotification)
  .catch(errorNotification);

promise2.catch(errorNotification);
