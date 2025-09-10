'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

function twoPromisi() {
  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => resolve('Promise was resolved!'));
  });

  promise1
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;

      body.append(div);
    })
    .catch((error) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.classList.add('error-message');
      div.textContent = error.message;

      body.append(div);
    });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
  });

  promise2
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;

      body.append(div);
    })
    .catch((eror) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.classList.add('error-message');
      div.textContent = eror.message;

      body.append(div);
    });
}

twoPromisi();
