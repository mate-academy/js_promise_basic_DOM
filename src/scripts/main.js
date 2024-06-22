'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const div = document.createElement('div');

logo.addEventListener('click', () => {
  div.classList.add('message');

  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line
      reject();
    }, 3000);
  });

  promise1.then(() => {
    div.textContent = 'Promise was resolved!';
    body.append(div);
  });

  promise2.catch(() => {
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';

    if (!body.contains(div)) {
      body.append(div);
    }
  });
});
