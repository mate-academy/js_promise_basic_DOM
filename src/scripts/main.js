'use strict';

function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.textContent = text;
  div.className = 'message' + (isError ? ' error-message' : '');
  document.body.appendChild(div);
}

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

function attachHandlers(promise) {
  promise.then((res) => showMessage(res)).catch((er) => showMessage(er, true));
}

attachHandlers(promise1);
attachHandlers(promise2);
