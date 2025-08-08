'use strict';

const logo = document.querySelector('.logo');

function ShowMessage(message, isError = false) {
  const el = document.createElement('div');

  el.classList.add('message');

  if (isError) {
    el.classList.add('error-message');
  }
  el.textContent = message;

  document.body.appendChild(el);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then((value) => {
    ShowMessage(value);
  })
  .catch((err) => {
    ShowMessage(err.message, true);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then((value) => {
    ShowMessage(`${value}`);
  })
  .catch((err) => {
    ShowMessage(err.message, true);
  });
