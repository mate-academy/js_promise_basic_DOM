'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const resolver = (resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`
    <div class="message">
      Promise was resolved!
    </div>
    `);
  });
};

const rejecter = (resolve, reject) => {
  setTimeout(() => {
    reject(`
    <div class="error-message message">
      Promise was rejected!
    </div>
    `);
  }, 3000);
};

const promise1 = new Promise(resolver);
const promise2 = new Promise(rejecter);

promise1.then((result) => {
  body.insertAdjacentHTML('beforeend', result);
});

promise2.catch((result) => {
  body.insertAdjacentHTML('beforeend', result);
});
