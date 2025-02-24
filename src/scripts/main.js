'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.onclick = () => {
    resolve('Promise was resolved!');
  };
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const error = (value) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">${value}</div>`,
  );
};
const success = (value) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">${value}</div>`,
  );
};

Promise.race([promise1, promise2]).then(success).catch(error);
