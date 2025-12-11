'use strict';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('success');
  });
});

handlePromise(promise1);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

handlePromise(promise2);

function showMessage(message, error = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (error) {
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
  } else {
    div.classList.add('message');

    div.textContent = 'Promise was resolved!';
  }
  body.append(div);
}

function handlePromise(promise) {
  promise.then(
    (message) => {
      showMessage(message);
    },
    (message) => {
      showMessage(message, true);
    },
  );
}
// write your code here
