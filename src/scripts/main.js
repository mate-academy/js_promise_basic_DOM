'use strict';

const logo = document.querySelector('.logo');

function createElement(message, secondClass) {
  const div = document.createElement('div');

  div.classList.add('message', `${secondClass}`);
  div.textContent = `${message}`;

  document.body.append(div);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  createElement('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise2.catch(() => {
  createElement('Promise was rejected!', 'error-message');
});
