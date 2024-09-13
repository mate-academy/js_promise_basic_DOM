'use strict';

// write your code here

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const div = document.createElement('div');

const promise1 = new Promise(function (resolve, reject) {
  resolve(
    logo.addEventListener('click', () => {
      body.append(div);
    }),
  );
});

promise1.then(() => {
  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
});

const promise2 = new Promise(function (resolve, reject) {
  // eslint-disable-next-line
  setTimeout(() => reject(), 3000);
});

promise2.catch(() => {
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';

  if (!body.contains(div)) {
    body.append(div);
  }
});
