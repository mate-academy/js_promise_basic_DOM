'use strict';

const logo = document.querySelector('.logo');

function massage(text, isError = false) {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');

  if (isError === false) {
    newDiv.classList.add('error-message');
  }

  newDiv.textContent = text;
  document.body.appendChild(newDiv);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((message) => massage(message, true))
  .catch((error) => massage(error));

promise2
  .then((message) => massage(message, true))
  .catch((error) => massage(error));
