'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

promise1.then(() => success());

function success() {
  const block = document.createElement('div');

  block.className = 'message';
  block.innerText = 'Promise was resolved!';
  document.body.append(block);
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise2.catch(() => error());

function error() {
  const block = document.createElement('div');

  block.className = 'message error-message';
  block.innerText = 'Promise was rejected!';
  document.body.append(block);
}
