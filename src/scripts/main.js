'use strict';

const logo = document.querySelector('h1');
const body = document.querySelector('body');

logo.addEventListener('click', () => {
  const promise1 = new Promise(function (resolve) {
    resolve();
  });

  promise1.then(() => {
    const div1 = document.createElement('div');

    div1.className = 'message';
    div1.textContent = 'Promise was resolved!';

    body.appendChild(div1);
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const div2 = document.createElement('div');

    div2.className = 'message error-message';
    div2.textContent = 'Promise was rejected!';
    reject(body.appendChild(div2));
  }, 3000);
});

promise2.catch(() => {});
