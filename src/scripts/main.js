'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const success = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.append(div);
};

const fail = (message) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = message;
  document.body.append(div);
};

promise1
  .then(() => success('Promise was resolved!'))
  .catch(() => fail('Promise was rejected!'));

promise2
  .then(() => success('Promise was resolved!'))
  .catch(() => fail('Promise was rejected!'));
