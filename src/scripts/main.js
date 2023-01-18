'use strict';

const logo = document.querySelector('.logo');

const showMessage = (className, text) => {
  const div = document.createElement('div');

  document.body.append(div);
  div.classList.add(className);
  div.textContent = text;
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

const promiseResult = (promise) => {
  promise
    .then(result => showMessage('message', result))
    .catch(error => showMessage('error-message', error));
};

promiseResult(promise1);
promiseResult(promise2);
