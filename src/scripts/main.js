'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.querySelector('.logo');
  const body = document.body;

  const promise1 = new Promise((resolve) => {
    logoElement.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  const successHandler = (message) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = message;
    body.appendChild(div);
  };

  const errorHandler = (message) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = message;
    body.appendChild(div);
  };

  promise1.then(successHandler).catch(errorHandler);
  promise2.then(successHandler).catch(errorHandler);
});
