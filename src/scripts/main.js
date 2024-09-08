'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then((result) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.append(div);

  return result;
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.append(div);

  return error;
});
