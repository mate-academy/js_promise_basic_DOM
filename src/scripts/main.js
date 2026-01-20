'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const resMes = document.createElement('div');
const rejMes = document.createElement('div');

resMes.textContent = 'Promise was resolved!';

rejMes.textContent = 'Promise was rejected!';

resMes.classList.add('message');
rejMes.classList.add('message', 'error-message');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
})
  .then(() => {
    body.append(resMes.cloneNode(true));
  })
  .catch(() => {
    body.append(rejMes.cloneNode(true));
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
})
  .then(() => {
    body.append(resMes.cloneNode(true));
  })
  .catch(() => {
    body.append(rejMes.cloneNode(true));
  });

Promise.allSettled([promise1, promise2]).then(() => {});
