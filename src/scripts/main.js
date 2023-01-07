'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolver = (resolve, rejected) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    rejected();
  }, 3000);
};

const promise1 = new Promise(resolver);
const promise2 = new Promise(resolver);

promise1
  .then(
    () => {
      const divSuccess = document.createElement('div');

      divSuccess.classList.add('message');
      divSuccess.innerText = 'Promise was resolved!';
      body.append(divSuccess);
    });

promise2
  .catch(
    () => {
      const divError = document.createElement('div');

      divError.classList.add('error-message');
      divError.innerText = 'Promise was rejected';
      body.append(divError);
    });
