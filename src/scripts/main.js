'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const successing = function () {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = 'Promise was resolved!';
  document.body.append(div);
};

const failing = function () {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.innerText = 'Promise was rejected!';
  document.body.append(div);
};

promise1.then(successing);
promise1.catch(failing);
promise2.then(successing);
promise2.catch(failing);
