'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  document.addEventListener('click', (e) => {
    if (e.target === logo) {
      resolve();
    }
  });
});

// eslint-disable-next-line promise/param-names
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
