'use strict';

const logo = document.querySelector('.logo');

const createMassage = function (className, text) {
  const tag = document.createElement('div');

  tag.className = className;
  tag.innerHTML = text;
  document.body.appendChild(tag);
};

const promise = new Promise((resolve) => {
  logo.addEventListener('click', function () {
    resolve('Promise was resolved!');
  });
});

promise
  .then(() => {
    createMassage('message', 'Promise was resolved!');
  })
  .catch(() => {
    createMassage('message error-message', 'Promise was rejected!');
  });

const promiseSecond = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promiseSecond
  .then(() => {
    createMassage('message', 'Promise was resolved!');
  })
  .catch(() => {
    createMassage('message error-message', 'Promise was rejected!');
  });
