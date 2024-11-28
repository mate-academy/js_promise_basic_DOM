/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
'use strict';

const divPreparation = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('message');

  return { body, div };
};

const succses = (message) => {
  const { body, div } = divPreparation();

  div.innerText = message;
  body.appendChild(div);
};

const error = (message) => {
  const { body, div } = divPreparation();

  div.classList.add('error-message');
  div.innerText = message;
  body.appendChild(div);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
})
  .then(succses)
  .catch(error);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
})
  .then(succses)
  .catch(error);
