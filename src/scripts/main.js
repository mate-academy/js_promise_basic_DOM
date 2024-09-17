/* eslint-disable prefer-promise-reject-errors */
'use strict';

const page = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.setAttribute('class', 'message');
  message.textContent = 'Promise was resolved!';

  page.append(message);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.setAttribute('class', 'message');
  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';

  page.append(message);
});
