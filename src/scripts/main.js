'use strict';

const page = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve(compleat);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 3000);
});

promise1
  .then((result) => {
    result();
  });

promise2
  .catch((result) => {
    result();
  });

const compleat = () => {
  page.insertAdjacentHTML('beforeend',
    `<div class = 'message'>Promise was resolved!</div>`);
};

const error = () => {
  page.insertAdjacentHTML('beforeend',
    `<div class = 'message error-message'>Promise was rejected!</div>`);
};
