'use strict';

const logo = document.querySelector('.logo');

function createElement(text, ...classes) {
  const div = document.createElement('div');

  div.textContent = text;

  div.classList.add(...classes);
  document.body.append(div);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((data) => {
    createElement(data, 'message');
  })
  .catch((error) => {
    createElement(error.message, 'message', 'error-message');
  });

promise2
  .then((data) => {
    createElement(data, 'message');
  })
  .catch((error) => {
    createElement(error.message, 'message', 'error-message');
  });
