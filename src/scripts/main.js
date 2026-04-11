'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1
  .then((data) => {
    const div = document.createElement('div');

    div.classList = 'message';
    div.textContent = data;
    document.body.append(div);
  })
  .catch((data) => {
    const div = document.createElement('div');

    div.classList = 'error-message';
    div.textContent = data;
    document.body.append(div);
  });

promise2
  .then((data) => {
    const div = document.createElement('div');

    div.classList = 'message';
    div.textContent = data;
    document.body.append(div);
  })
  .catch((data) => {
    const div = document.createElement('div');

    div.classList = 'message error-message';
    div.textContent = data;
    document.body.append(div);
  });
