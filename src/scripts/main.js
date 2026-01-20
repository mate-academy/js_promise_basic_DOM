'use strict';

// write your code here
const body = document.querySelector('body');
const logo = body.querySelector('.logo');
const div = document.createElement('div');

div.classList.add('message');

twoPromises();

function twoPromises() {
  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => resolve('Promise was resolved!'));
  });

  promise1
    .then((message) => {
      div.textContent = message;
      body.append(div);
    })
    .catch(() => {
      div.classList.add('error-message');
      div.textContent = 'Promise was rejected!';
      body.append(div);
    });
}
