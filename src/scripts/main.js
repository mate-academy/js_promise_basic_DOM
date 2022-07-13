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

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

promise1.then(() => notification('message', 'Promise was resolved!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.catch(() => notification('error-message', 'Promise was rejected!'));
