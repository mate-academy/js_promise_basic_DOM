'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.onclick = () => resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((result) => {
    const div = document.createElement('div');

    div.innerHTML = result;
    div.className = 'message';
    document.body.append(div);
  })
  .catch();

promise2
  .then()
  .catch((error) => {
    const div = document.createElement('div');

    div.innerHTML = error;
    div.className = 'error-message';
    document.body.append(div);
  });
