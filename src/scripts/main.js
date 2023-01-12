'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const errorMessage = 'Promise was rejected!';
const succesMessage = 'Promise was resolved!';

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve(succesMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

promise1
  .then(
    (result) => {
      const divSuccess = document.createElement('div');

      divSuccess.classList.add('message');
      divSuccess.innerText = result;
      body.append(divSuccess);
    });

promise2
  .catch(
    (result) => {
      const divError = document.createElement('div');

      divError.classList.add('error-message');
      divError.innerText = result;
      body.append(divError);
    });
