'use strict';

const logo = document.querySelector('.logo');

const promise1 = () => {
  return new Promise((resolve) => {
    resolve('Promise was resolved!');
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
};

logo.addEventListener('click', () => {
  promise1()
    .then((message) => {
      document.body.insertAdjacentHTML(
        'beforebegin',
        `<div class="message">${message}</div>`,
      );
    })
    .catch((error) => {
      document.body.insertAdjacentHTML(
        'beforebegin',
        `<div class="message error-message">Error: ${error.message}</div>`,
      );
    });

  promise2()
    .then((message) => {
      document.body.insertAdjacentHTML(
        'beforebegin',
        `<div class="message">${message}</div>`,
      );
    })
    .catch((error) => {
      document.body.insertAdjacentHTML(
        'beforebegin',
        `<div class="message error-message">Error: ${error.message}</div>`,
      );
    });
});
