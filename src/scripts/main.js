'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const promise1 = new Promise((resolve) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      resolve();
    });
  });

  // eslint-disable-next-line promise/param-names
  const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }, 3000);
  });

  const handleSuccess = () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  };

  const handleError = () => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  };

  promise1.then(handleSuccess).catch(handleError);
  promise2.then(handleSuccess).catch(handleError);
});
