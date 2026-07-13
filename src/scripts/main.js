'use strict';

// write your code here
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

promise1.then((resolve) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';

  body.append(div);
});

promise1.catch((reject) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';

  body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.then((resolve) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';

  body.append(div);
});

promise2.catch((reject) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';

  body.append(div);
});
