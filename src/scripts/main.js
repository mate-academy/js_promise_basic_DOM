'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function onSuccess() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.append(div);
}

function onError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  body.append(div);
}

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

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
