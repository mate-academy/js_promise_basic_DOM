'use strict';
let done = false;

const promise1 = new Promise((resolve, reject) => {
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', (el) => {
    if (!done) {
      done = true;
      resolve();
    }
  });
});

promise1.then(() => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!done) {
      done = true;
      reject();
    }
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');
  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});
