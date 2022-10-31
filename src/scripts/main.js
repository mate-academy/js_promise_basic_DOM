'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolver1 = (resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
};

const promise1 = new Promise(resolver1);

const resolver2 = (resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
};

const promise2 = new Promise(resolver2);

promise1.then(result => {
  body.insertAdjacentHTML('afterbegin', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
});

promise2.catch(er => {
  body.insertAdjacentHTML('afterbegin', `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `);
});
