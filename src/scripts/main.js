'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

const handleSuccess = () => {
  const successMess = document.createElement('div');

  successMess.className = 'message';
  successMess.textContent = 'Promise was resolved!';
  document.body.appendChild(successMess);
};
const handleError = () => {
  const errorMess = document.createElement('div');

  errorMess.className = 'message error-message';
  errorMess.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMess);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
