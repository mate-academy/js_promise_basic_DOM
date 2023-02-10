'use strict';

// write your code here
const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const success = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = 'Promise was resolved!';
  body.append(div);
};

const error = () => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.innerText = 'Promise was reject!';
  body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(success);
  });
});

promise1
  .then(success)
  .catch();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(error), 3000);
});

promise2
  .then()
  .catch(error);
