'use strict';

const body = document.querySelector('body');
const title = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  title.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((data) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = data;
  body.append(div);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error.message;
  body.append(div);
});
