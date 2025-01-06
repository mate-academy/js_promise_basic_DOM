'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function onSuccess(data) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = data;

  body.append(div);
}

function onError(data) {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.innerText = data;

  body.append(div);
}

promise1.then(onSuccess);
promise2.catch(onError);
