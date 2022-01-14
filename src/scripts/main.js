'use strict';

// write your code here
const body = document.querySelector('body');

function createPromis() {
  const h1 = document.querySelector('h1');

  const resolver = (resolve, reject) => {
    h1.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromis();
const promise2 = createPromis();

promise1.then(onSuccess);
promise2.catch(onError);

function onSuccess() {
  body.insertAdjacentHTML('beforeend',
    `<div class="message">Promise was resolved!</div>`);
};

function onError() {
  body.insertAdjacentHTML('beforeend',
    `<div class="message error-message">Promise was rejected!</div>`);
};
