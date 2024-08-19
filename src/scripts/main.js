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
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.innerHTML = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.innerHTML = 'Promise was rejected!';
    document.body.appendChild(errorDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error, 'Promise was rejected!'), 3000);
});

promise2
  .then(() => {
    addClass('message', 'Promise was resolved!');
  })
  .catch(() => {
    addClass('message error-message', 'Promise was rejected!');
  });
