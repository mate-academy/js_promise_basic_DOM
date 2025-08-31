'use strict';

// write your code here

function success(message) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
}

function error(message) {
  const div = document.createElement('div');

  div.classList = 'message error-message';
  div.textContent = message;
  document.body.appendChild(div);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  }
});

promise1.then(
  (reason) => success(reason),
  () => error('Promise was rejected!'),
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
});

promise2.then(
  () => success('Promise was resolved!'),
  (reason) => error(reason),
);
