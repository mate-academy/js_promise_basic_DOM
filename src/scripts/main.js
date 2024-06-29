'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');

successMessage.classList.add('message');
successMessage.innerText = 'Promise was resolved!';
errorMessage.classList.add('message', 'error-message');
errorMessage.innerText = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  if (logo) {
    logo.addEventListener('click', (e) => {
      resolve();
    });

    return;
  }

  reject(new Error('Logo isnt found'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 dont pass'));
  }, 3000);
});

const successHandler = () => body.append(successMessage);
const errorHandler = () => body.append(errorMessage);

Promise.race([promise1, promise2]).then(successHandler).catch(errorHandler);
