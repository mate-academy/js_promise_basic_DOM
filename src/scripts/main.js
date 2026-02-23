'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const showSuccess = () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  };

  const showError = () => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  };

  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    void resolve;

    setTimeout(() => {
      reject(new Error('Promise was rejected'));
    }, 3000);
  });

  promise1.then(showSuccess).catch(showError);
  promise2.then(showSuccess).catch(showError);
});
