'use strict';

const body = document.querySelector('body');

const succesResolver = () => {
  body.insertAdjacentHTML(`afterend`,
    `<div class="message">Promise was resolved!</div>`);
};

const errorResolver = () => {
  body.insertAdjacentHTML(`afterend`,
    `<div class="message error-message">Promise was rejected!</div>`);
};

const promise1 = new Promise(
  (resolve) => {
    const button = document.querySelector('.logo');

    button.addEventListener('click', () => {
      resolve();
    });
  }
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
}
);

promise1.then(succesResolver, errorResolver);

promise2.then(succesResolver, errorResolver);
