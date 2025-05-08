'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const body = document.querySelector('body');
const div = document.createElement('div');

div.className = 'message';

Promise.race([promise1, promise2])
  .then((message) => {
    div.innerHTML = message;
  })
  .catch((errorMessage) => {
    div.classList.add('error-message');
    div.innerHTML = errorMessage.message;
  })
  .finally(() => {
    body.appendChild(div);
  });
