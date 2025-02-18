'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const promise1 = new Promise((resolve) => {
    document.querySelector('.logo').addEventListener('click', () => {
      resolve();
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  const handleSucces = () => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  };

  const handleError = () => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  };

  promise1.then(handleSucces).catch(handleError);
  promise2.then(handleSucces).catch(handleError);
});
