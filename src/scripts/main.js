'use strict';

const logo = document.querySelector('.logo');

const showMessage = (className, text) => {
  const div = document.createElement('div');

  div.classList.add(className);
  div.textContent = text;
  document.body.append(div);
};

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

promise1
  .then(result => showMessage('message', result))
  .catch(error => showMessage('error-message', error));

promise2
  .then(result => showMessage('message', result))
  .catch(error => showMessage('error-message', error));
