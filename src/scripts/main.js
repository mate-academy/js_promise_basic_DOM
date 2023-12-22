/* eslint-disable no-console */
'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const resolver1 = (resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
};

const resolver2 = (resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
};

const promise1 = new Promise(resolver1);
const promise2 = new Promise(resolver2);

promise1
  .then((res) => {
    body.insertAdjacentHTML('beforeend', `
      <div class="message">
        ${res}
      </div>
    `);
  })
  .catch((error) => {
    console.warn(error);
  });

promise2
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    body.insertAdjacentHTML('beforeend', `
      <div class="message error-message">
        ${error}
      </div>
    `);
  });
