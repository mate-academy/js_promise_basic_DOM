'use strict';

const logo = document.querySelector('.logo');

function creatPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject(new Error());
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = creatPromise;
const promise2 = creatPromise;

promise1.then(() => document.body.insertAdjacentHTML('beforeend', `
  <div class="message">Promise was resolved!</div>`));

promise2.catch(() => document.body.insertAdjacentHTML('beforeend', `
  <div class="error-message">Promise was rejected!</div>`));
