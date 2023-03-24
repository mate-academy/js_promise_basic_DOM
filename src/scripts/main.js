/* eslint-disable no-unused-vars */
'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerHTML = 'Promise was resolved!';

    resolve(document.body.append(div));
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const div = document.createElement('div');

    div.classList.add('error-message');
    div.innerHTML = 'Promise was rejected!';

    reject(document.body.append(div));
  }, 3000);
});
