'use strict';

const logo = document.querySelector('.logo');

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

const successHandler = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
};

const errorHandler = (error) => {
  const div2 = document.createElement('div');

  div2.classList.add('message', 'error-message');
  div2.textContent = error.message;
  document.body.appendChild(div2);
};

promise1
  .then((message) => {
    successHandler(message);
  })
  .catch((error) => {
    errorHandler(error);
  });

promise2
  .then((message) => {
    successHandler(message);
  })
  .catch((error) => {
    errorHandler(error);
  });
