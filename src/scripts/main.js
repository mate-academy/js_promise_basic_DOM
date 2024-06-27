'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

function createPromiseResultElement(text, className = '') {
  const div = document.createElement('div');

  div.classList.add('message');

  if (className) {
    div.classList.add(className);
  }

  div.innerText = text;

  return div;
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handleSuccess = (message) => {
  body.append(createPromiseResultElement(message));
};

const handleError = (error) => {
  body.append(createPromiseResultElement(error.message, 'error-message'));
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
