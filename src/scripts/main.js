'use strict';
/* eslint-disable */

const logo = document.querySelector('.logo');
const div = document.createElement('div');

const resolved = new Promise((resolve) =>
  logo.addEventListener('click', () => resolve('Promise was resolved!')),
);

const rejected = new Promise((resolve, reject) =>
  setTimeout(reject, 3000, 'Promise was rejected!'),
);

const showMessage = (promise) => {
  promise
    .then((message) => {
      div.classList.add('message');
      div.textContent = message;
      document.body.append(div);
    })
    .catch((message) => {
      div.classList.add('message', 'error-message');
      div.textContent = message;
      document.body.append(div);
    });
};

showMessage(resolved);
showMessage(rejected);
