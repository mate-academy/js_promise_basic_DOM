'use strict';

const body = document.body;

function handlerLogo() {
  const logo = document.querySelector('.logo');
  const promiseHandler = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });

    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  return promiseHandler;
};

handlerLogo()
  .then((result) => {
    body.insertAdjacentHTML('beforeend', `
    <div class="message">${result}</div>
    `);
  })
  .catch((error) => {
    body.insertAdjacentHTML('beforeend', `
    <div class="error-message">${error.message}</div>
    `);
  });
