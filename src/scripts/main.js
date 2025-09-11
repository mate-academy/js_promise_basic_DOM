'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  if (logo) {
    logo.addEventListener('click', () => resolve('Promise was resolved!'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

function twoPromisi() {
  promise1
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;

      body.append(div);
    })
    .catch(() => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.classList.add('error-message');
      div.textContent = 'Promise was rejected!';

      body.append(div);
    });

  promise2
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;

      body.append(div);
    })
    .catch(() => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.classList.add('error-message');
      div.textContent = 'Promise was rejected!';

      body.append(div);
    });
}

twoPromisi();
