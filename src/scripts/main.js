'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise2
    .then((message) => {
      const div = document.createElement('div');

      div.textContent = `${message}`;
      div.classList.add('message');
      document.body.appendChild(div);
    })
    .catch((error) => {
      const div = document.createElement('div');

      div.textContent = error.message;
      div.classList.add('message', 'error-message');
      document.body.appendChild(div);
    });

  logo.addEventListener('click', () => {
    const promise1 = new Promise((resolve, reject) => {
      resolve('Promise was resolved!');
    });

    promise1
      .then((message) => {
        const div = document.createElement('div');

        div.textContent = `${message}`;
        div.classList.add('message');
        document.body.appendChild(div);
      })
      .catch((error) => {
        const div = document.createElement('div');

        div.textContent = error.message;
        div.classList.add('message', 'error-message');
        document.body.appendChild(div);
      });
  });
});
