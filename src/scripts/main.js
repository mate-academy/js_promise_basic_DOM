'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const promise1 = new Promise((resolve, reject) => {
    const logo = document.querySelector('.logo');

    // Если логотипа нет — отклоняем промис, чтобы тесты это поймали
    if (!logo) {
      reject(new Error('Logo element not found'));

      return;
    }

    logo.addEventListener('click', () => {
      resolve();
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise rejected after 3 seconds'));
    }, 3000);
  });

  function onSuccess() {
    const body = document.querySelector('body');
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';

    body.appendChild(div);
  }

  function onError() {
    const body = document.querySelector('body');
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';

    body.appendChild(div);
  }

  Promise.race([promise1, promise2]).then(onSuccess).catch(onError);
});
