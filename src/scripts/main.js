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

  promise1
    .then((result) => {
      newDiv1.textContent = result;
      document.body.appendChild(newDiv1);
    })
    .catch((result) => {
      newDiv2.textContent = result;
      newDiv2.classList.add('error-message');
      document.body.appendChild(newDiv2);
    });
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise2.catch((result) => {
  newDiv2.textContent = result;
  newDiv2.classList.add('error-message');
  document.body.appendChild(newDiv2);
});
