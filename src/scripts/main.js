'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(() => {
  const divPromise1 = document.createElement('div');

  divPromise1.className = 'message';
  divPromise1.innerText = 'Promise was resolved!';

  body.appendChild(divPromise1);
})
  .catch(() => {
    const divPromise1 = document.createElement('div');

    divPromise1.className = 'message error-message';
    divPromise1.innerText = 'Promise was rejected!';

    body.appendChild(divPromise1);
  });

promise2.then(() => {
  const divPromise2 = document.createElement('div');

  divPromise2.className = 'message';
  divPromise2.innerText = 'Promise was resolved!';

  body.appendChild(divPromise2);
})
  .catch(() => {
    const divPromise2 = document.createElement('div');

    divPromise2.className = 'message error-message';
    divPromise2.innerText = 'Promise was rejected!';

    body.appendChild(divPromise2);
  });
