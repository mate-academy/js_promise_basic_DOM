'use strict';

// write your code here

const logotype = document.querySelector('.logo');

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
  });

promise2
  .catch(errors => {
    const body = document.querySelector('body');

    body.insertAdjacentHTML('beforeend', `
      <div class="error-message">Promise was rejected!</div>
    `);
  });
