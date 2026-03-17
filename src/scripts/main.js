'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(handleSuccess).catch(handleError);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 3000);
});

promise2.then(handleSuccess).catch(handleError);

function handleSuccess() {
  const successHandler = body.appendChild(document.createElement('div'));

  successHandler.classList.add('message');
  successHandler.textContent = 'Promise was resolved!';
}

function handleError() {
  const errorHandler = body.appendChild(document.createElement('div'));

  errorHandler.classList.add('message', 'error-message');
  errorHandler.textContent = 'Promise was rejected!';
}
