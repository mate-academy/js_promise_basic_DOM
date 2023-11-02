'use strict';

const div = document.createElement('div');

const success = (result) => {
  div.className = 'message';
  div.innerText = result;
  document.body.append(div);
};

const error = (result) => {
  div.className = 'message error-message';
  div.innerText = result;
  document.body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
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

promise1.then(success);
promise2.catch(error);
