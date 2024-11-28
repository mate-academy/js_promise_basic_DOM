'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const successHandler = (message) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">${message}</div>`,
  );
};

const errorHandler = (error) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">${error.message}</div>`,
  );
};

promise1
  .then((message) => {
    successHandler(message);
  })
  .catch((error) => {
    errorHandler(error);
  });

promise2
  .then((message) => {
    successHandler(message);
  })
  .catch((error) => {
    errorHandler(error);
  });
