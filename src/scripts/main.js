'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function message(text, className) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;

  document.body.append(div);
}

promise1
  .then(() => {
    message('Promise was resolved!', 'message');
  })
  .catch(() => {
    message('Promise was rejected!', 'message error-message');
  });

promise2.catch(() => {
  message('Promise was rejected!', 'message error-message');
});
