'use strict';

const body = document.querySelector('body');
const div = document.createElement('div');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

function message(item) {
  body.append(div);

  if (item === 'Promise was resolved!') {
    div.classList = 'message';
  } else {
    div.classList = 'error-message';
  }

  div.textContent = item;
}

promise1
  .then((resolve) => {
    message(resolve);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .catch((reject) => {
    message(reject);
  });
