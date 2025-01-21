'use strict';

// write your code here
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => resolve());

  promise1.then(sucess).catch(error);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise rejected after 3 seconds')), 3000);
});

promise2.then(sucess).catch(error);

function sucess() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';

  document.body.appendChild(div);
}

function error() {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';

  document.body.appendChild(div);
}
