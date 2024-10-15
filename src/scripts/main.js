'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function ifSuccess(successMessage) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = successMessage;
  document.body.appendChild(div);
}

function ifError(errorMessage) {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = errorMessage;
  document.body.appendChild(div);
}

promise1.then(ifSuccess).catch(ifError);

promise2.then(ifSuccess).catch(ifError);
