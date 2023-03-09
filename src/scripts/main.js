/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 3000);
});

function handleSuccsess() {
  const succesMessage = document.createElement('div');

  succesMessage.classList.add('message');
  succesMessage.innerText = 'Promise was resolved';
  logo.after(succesMessage);
}

function handleError() {
  const errorMessage = document.createElement('div');

  errorMessage.innerText = 'Promise was rejected!';
  errorMessage.classList.add('error-message');
  logo.after(errorMessage);
}

promise1.then(handleSuccsess, handleError);
promise2.then(handleSuccsess, handleError);
