'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.className = `message`;
  div.innerHTML = `Promise was resolved!`;
  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.className = 'error-message';
  div.innerHTML = 'Promise was rejected!';

  document.body.append(div);
});
