'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(
    () => reject(new Error('Promise timed out after 3 seconds')),
    3000,
  );
});

const successHandler = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
};

const errorHandler = (message) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = message;
  document.body.appendChild(div);
};

promise1
  .then(() => successHandler('Promise was resolved!'))
  .catch(() => errorHandler('Promise was rejected!'));

promise2
  .then(() => successHandler('Promise was resolved!'))
  .catch(() => errorHandler('Promise was rejected!'));
