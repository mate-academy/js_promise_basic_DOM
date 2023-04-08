'use strict';

const logo = document.querySelector('.logo');

function createDiv(divClass, message) {
  const div = document.createElement('div');

  div.className = divClass;
  div.textContent = message;

  document.body.append(div);
}

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise(
  (resolve, reject) => setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000));

promise1
  .then(result => createDiv('message', result))
  .catch(error => createDiv('error-message', error));

promise2
  .then(result => createDiv('message', result))
  .catch(error => createDiv('error-message', error));
