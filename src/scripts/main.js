'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((message) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = error;
    document.body.appendChild(div);
  });

promise2
  .then((message) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = error;
    document.body.appendChild(div);
  });
