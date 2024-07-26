'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');

  reject(Error('Promise was rejected!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000);
});

logo.addEventListener('click', () => {
  promise1
    .then((res) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = res;
      body.append(div);
    })
    .catch((error) => {
      return error;
    });

  promise2
    .then((data) => {
      return data;
    })
    .catch((error) => {
      const div = document.createElement('div');

      div.classList.add('message', 'error-message');
      div.textContent = error;
      body.append(div);
    });
});
