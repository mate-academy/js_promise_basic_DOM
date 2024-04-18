'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function (resolve, reject) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1
  .then((data) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.innerText = data;

    document.body.append(div);
  })
  .catch();

promise2.then().catch((error) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.innerText = error;

  document.body.append(div);
});

