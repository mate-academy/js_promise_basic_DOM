'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const msg = 'Promise was resolved!';

    resolve(msg);
  });
});

promise1.then((message) => {
  const div = document.createElement('div');

  div.textContent = message;
  div.classList.add('message');

  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.classList.add('message error-message');
  div.textContent = error;

  document.body.appendChild(div);
});
