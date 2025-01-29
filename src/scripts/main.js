'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function sucsess() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = `Promise was resolved!`;
  body.append(div);
}

function err() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = `Promise was rejected!`;
  body.append(div);
}

promise1.then(sucsess).catch(err);
promise2.then(sucsess).catch(err);
