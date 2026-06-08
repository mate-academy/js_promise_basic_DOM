'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const onSuccess = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  document.body.appendChild(div);
};

const onError = (error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = error.message;

  document.body.appendChild(div);
};

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
