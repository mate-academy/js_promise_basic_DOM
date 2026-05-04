'use strict';

const logo = document.querySelector('.logo');
const newDiv = document.createElement('div');

newDiv.classList = 'message';

logo.addEventListener('click', function successHandler() {
  const promise1 = new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });

  promise1.then((result) => {
    newDiv.textContent = result;
    document.body.appendChild(newDiv);
  });
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise2.catch((result) => {
  newDiv.textContent = result;
  newDiv.classList = 'error-message';
  document.body.appendChild(newDiv);
});
