'use strict';

const logo = document.getElementById('logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout: 3 seconds passed.'));
  }, 3000);
});

const successHanlder = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const errorHandler = () => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1.then(successHanlder).catch(errorHandler);
promise2.then(successHanlder).catch(errorHandler);
