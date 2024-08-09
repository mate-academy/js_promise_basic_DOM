'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

logo.addEventListener('click', function () {
  const promise1 = new Promise(function (resolve) {
    resolve();
  });

  promise1
    .then(() => {
      const newDiv = document.createElement('div');

      newDiv.className = 'message';
      newDiv.textContent = 'Promise was resolved!';
      body.append(newDiv);
    })
    .catch(() => {
      const newDiv = document.createElement('div');

      newDiv.classList.add('message', 'error-message');
      newDiv.textContent = 'Promise was rejected!';
      body.append(newDiv);
    });
});

const promise2 = new Promise(function (resolve, reject) {
  reject(new Error());
});

promise2.catch(() => {
  setTimeout(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message', 'error-message');
    newDiv.textContent = 'Promise was rejected!';
    body.append(newDiv);
  }, 3000);
});
