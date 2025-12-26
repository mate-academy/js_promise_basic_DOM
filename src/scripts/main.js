'use strict';

const body = document.body;
const logo = body.querySelector('.logo');

const successHandler = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  body.append(div);
};

const errorHandler = () => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve(), { once: true });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Rejected')), 3000);
});

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
