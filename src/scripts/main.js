'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const showMessage = (text, isError = false) => {
  const box = document.createElement('div');

  box.classList.add('message');

  if (isError) {
    box.classList.add('error-message');
  }

  box.textContent = text;
  body.appendChild(box);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', true));

promise2
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', true));
