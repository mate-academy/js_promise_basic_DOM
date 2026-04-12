'use strict';

// write your code here
const promise1 = new Promise(function (resolve) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

const handleSuccess = () => {
  const div = document.createElement('div');

  div.classList = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const handleError = () => {
  const div = document.createElement('div');

  div.classList = 'message error-message';

  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
