'use strict';

const promise1 = new Promise((resolve, reject) => {
  const body = document.querySelector('body');
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.classList = 'message';
    div.innerHTML = 'Promise was resolved!';

    setTimeout(() => resolve(body.appendChild(div)), 1000);
  });
});

promise1
  .then(result => result)
  .catch(error => error);

const promise2 = new Promise((resolve, reject) => {
  const body = document.querySelector('body');
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.classList = 'message';
    div.innerHTML = 'Promise was rejected!';

    setTimeout(() => reject(body.appendChild(div)), 3000);
  });
});

promise2
  .then(result => result)
  .catch(error => error);
