'use strict';

const logo = document.querySelector('.logo');
const newDiv1 = document.createElement('div');
const newDiv2 = document.createElement('div');

newDiv1.classList = 'message';
newDiv2.classList = 'message';

logo.addEventListener('click', function successHandler() {
  const promise1 = new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });

  promise1.then((result) => {
    const div = document.createElement('div');

    div.classList = 'message';
    div.textContent = result;
    document.body.appendChild(div);
  });

  promise1.catch((error) => {
    const div = document.createElement('div');

    div.classList = 'message error-message';
    div.textContent = error;
    document.body.appendChild(div);
  });
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise2.then((result) => {
  const div = document.createElement('div');

  div.classList = 'message';
  div.textContent = result;
  document.body.appendChild(div);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.classList = 'message error-message';
  div.textContent = error;
  document.body.appendChild(div);
});
