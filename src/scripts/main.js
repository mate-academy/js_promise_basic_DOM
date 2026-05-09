'use strict';

const logo = document.querySelector('.logo');

const handleSuccess = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
};

const handleError = (error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = error.message;
  document.body.appendChild(div);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
