'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function promises() {
  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => resolve('Promise was resolved!'));
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise1
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;
      body.append(div);
    })
    .catch((err) => {
      const div = document.createElement('div');

      div.classList.add('message', 'error-message');
      div.textContent = err.message;
      body.append(div);
    });

  promise2
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;
      body.append(div);
    })
    .catch((err) => {
      const div = document.createElement('div');

      div.classList.add('message', 'error-message');
      div.textContent = err.message;
      body.append(div);
    });
}

promises();
