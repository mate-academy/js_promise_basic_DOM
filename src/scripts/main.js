'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const notification = (className, msg) => {
  body.insertAdjacentHTML(
    'beforeend',
    `<div class="${className}">
        ${msg}
    </div>`
  );
};

const successHandler = () => notification('message', 'Promise was resolved!');
const errorHandler = () => (
  notification('error-message', 'Promise was rejected!')
);

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
