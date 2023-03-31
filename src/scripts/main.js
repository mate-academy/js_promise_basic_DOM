'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  body.addEventListener('click', function(e) {
    const logo = e.target.closest('.logo');

    if (!logo) {
      return;
    }

    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.append(div.cloneNode(true));
  });

promise2
  .catch(() => {
    const div = document.createElement('div');

    div.classList.add('error-message');
    div.textContent = `Promise was rejected!`;
    body.append(div.cloneNode(true));
  });
