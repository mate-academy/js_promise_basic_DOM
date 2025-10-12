'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  const promise1 = new Promise((resolve) => {
    document.body.addEventListener('click', (e) => {
      const logo = e.target.closest('.logo');

      if (logo) {
        resolve();
      }
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  const handleSuccess = () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
  };

  const handleError = () => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    body.appendChild(div);
  };

  promise1.then(handleSuccess).catch(handleError);
  promise2.then(handleSuccess).catch(handleError);
});
