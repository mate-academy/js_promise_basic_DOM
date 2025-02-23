'use strict';

const logoItem = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logoItem.addEventListener('click', () => {
    resolve({ className: 'message', message: 'Promise was resolved!' });
  });
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject({
      className: ['message', 'error-message'],
      message: 'Promise was rejected!' });
  }, 3000);
});

function handleSuccess({ className, message }) {
  const divItem = document.createElement('div');

  divItem.classList.add(className);
  divItem.textContent = message;
  document.body.append(divItem);
}

function handleError({ className, message }) {
  const divItem = document.createElement('div');

  divItem.classList.add(...className);
  divItem.textContent = message;
  document.body.append(divItem);
}

promise1.then(handleSuccess).catch(handleError);

promise2.then(handleSuccess).catch(handleError);
