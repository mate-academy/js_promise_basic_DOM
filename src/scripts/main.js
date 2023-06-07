'use strict';

const body = document.querySelector('body');

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

promise1.then(() => {
  body.insertAdjacentHTML(`afterend`,
    `<div class="message">Promise was resolved!</div>`);
},
() => {
  body.insertAdjacentHTML(`afterend`,
    `<div class="message error-message">Promise was rejected!</div>`);
}
);

promise2.then(() => {
  body.insertAdjacentHTML(`afterend`,
    `<div class="message">Promise was resolved!</div>`);
},
() => {
  body.insertAdjacentHTML(`afterend`,
    `<div class="message error-message">Promise was rejected!</div>`);
}
);
