'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(
      document.body.insertAdjacentHTML('beforeend',
        '<div class="message"> Promise was resolved! </div>')
    );
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(
      document.body.insertAdjacentHTML('beforeend',
        '<div class="message"> Promise was resolved! </div>')
    );
  }, 3000);
});

// eslint-disable-next-line no-console
promise1.then(data => console.log(data));
// eslint-disable-next-line no-console
promise2.catch(error => console.log(error));
