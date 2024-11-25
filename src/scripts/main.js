'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message');
  div.innerText = 'Promise was resolved!';
  document.body.appendChild(div);
});

promise1.catch(() => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message error-message');
  div.innerText = 'Promise was rejected!';
  document.body.appendChild(div);
});

promise2.then(() => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message');
  div.innerText = 'Promise was resolved!';
  document.body.appendChild(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message error-message');
  div.innerText = 'Promise was rejected!';
  document.body.appendChild(div);
});
