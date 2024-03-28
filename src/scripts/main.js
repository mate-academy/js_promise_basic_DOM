'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(
      document.body.insertAdjacentHTML(
        'afterbegin',
        `
    <div class="message">
      Promise was resolved!
    </div>
    `,
      ),
    );
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(
      document.body.insertAdjacentHTML(
        'afterbegin',
        `
  <div class="message error-message">
  Promise was rejected!
  </div>
  `,
      ),
    );
  }, 3000);
});

const successHandler = promise1.resolve;
const errorHandler = promise2.reject;

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
