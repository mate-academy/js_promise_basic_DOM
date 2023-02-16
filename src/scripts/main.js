'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {});
const promise2 = new Promise((resolve, reject) => {});

logo.addEventListener('click', () => {
  promise1
    .then(onSuccess());
});

promise2
  .catch(setTimeout(() => onError(), 3000));

function onSuccess() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
};

function onError() {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
};
