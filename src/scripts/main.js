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

const succesedPromise = new Promise(
  (resolve) => {
    const button = document.querySelector('.logo');

    button.addEventListener('click', () => {
      resolve();
    });
  }
);

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
}
);

succesedPromise.then(succesResolver, errorResolver);

rejectedPromise.then(succesResolver, errorResolver);
