'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const showSuccessMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  body.appendChild(div);
};

const showErrorMessage = (error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = error.message;
  body.appendChild(div);
};

promise1.then(showSuccessMessage).catch(showErrorMessage);
promise2.then(showSuccessMessage).catch(showErrorMessage);
