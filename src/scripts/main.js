'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const prom1 = new Promise(function (resolve, reject) {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

prom1
  .then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    body.append(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = error.message;
    body.append(div);
  });
