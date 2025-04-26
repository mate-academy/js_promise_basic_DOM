'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

    if (logo) {
      logo.addEventListener('click', () => {
        resolve();
      });
    }
});

promise1
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })

  .catch(() => {
    const errordiv = document.createElement('div');

    errordiv.classList.add('message', 'error-message');
    errordiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errordiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2
  .then(() => {})

  .catch(() => {
    const errordiv = document.createElement('div');

    errordiv.classList.add('message', 'error-message');
    errordiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errordiv);
  });
