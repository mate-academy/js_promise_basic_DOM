'use strict';

const logo = document.querySelector('.logo');

const addClass = function (className, text) {
  const tag = document.createElement('div');

  tag.className = className;
  tag.innerHTML = text;
  document.body.appendChild(tag);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', function () {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(() => {
    addClass('message', 'Promise was resolved!');
  })
  .catch(() => {
    addClass('message error-message', 'Promise was rejected!');
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2
  .then(() => {
    addClass('message', 'Promise was resolved!');
  })
  .catch(() => {
    addClass('message error-message', 'Promise was rejected!');
  });
