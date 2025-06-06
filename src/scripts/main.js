'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const successHandler = () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  };

  const errorHandler = () => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  };

  const promise1 = new Promise(function (resolve) {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

  const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error());
    }, 3000);
  });

  Promise.race([promise1, promise2])
    .then(() => {
      successHandler();
    })
    .catch(() => {
      errorHandler();
    });
});
