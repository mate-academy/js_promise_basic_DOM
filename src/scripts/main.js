'use strict';

function createPromise() {
  const body = document.querySelector('body');
  const logo = document.querySelector('.logo');

  const execute = (resolve, reject) => {
    logo.addEventListener('click', () => {
      const success = document.createElement('div');

      success.classList.add('message');
      success.innerText = 'Promise was resolved!';
      body.appendChild(success);
      resolve('Promise was resolved!');
    });

    setTimeout(() => {
      const error = document.createElement('div');

      error.classList.add('error-message');
      error.innerText = 'Promise was rejected!';
      body.appendChild(error);
      reject('Promise was rejected!');
    }, 3000);
  };

  return new Promise(execute);
}

const newPromise = createPromise();

newPromise
  .then(result => result)
  .catch(error => error);
