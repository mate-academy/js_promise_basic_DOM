'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', function (e) {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';

  document.body.appendChild(div);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = error.message;

  document.body.appendChild(div);
});
