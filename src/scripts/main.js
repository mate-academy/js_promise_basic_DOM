'use strict';

// write your code here

const logotype = document.querySelector('.logo');
const body = document.querySelector('body');

function createPromises() {
  const resolver = (resolve, reject) => {
    logotype.addEventListener('click', () => {
      resolve('Succes');
    });

    setTimeout(() => {
      reject('Error!!!');
    }, 3000);
  };

  return new Promise(resolver);
};

const promise1 = createPromises();
const promise2 = createPromises();

promise1
  .then(result => {
    logotype.insertAdjacentHTML('beforeend', `
      <div class="message">Promise was resolved!</div>
    `);
  })
  .catch(errors => {
    body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was rejected!</div>
  `);
  });

promise2
  .then(result => {
    body.insertAdjacentHTML('beforeend', `
    <div class="error-message">Promise was resolved!</div>
  `);
  })
  .catch(errors => {
    body.insertAdjacentHTML('beforeend', `
      <div class="error-message">Promise was rejected!</div>
    `);
  });
