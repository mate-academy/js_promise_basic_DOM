'use strict';

const logoEl = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logoEl.addEventListener('click', () => {
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

  div.className = 'message';
  div.textContent = message;

  document.body.append(div);
};

const errorHandler = (message) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = message;

  document.body.append(div);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
