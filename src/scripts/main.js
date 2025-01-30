'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function promiseResolve(messageText) {
  const div = document.createElement('div');
  const p = document.createElement('p');

  div.classList.add('message');
  p.textContent = messageText;
  div.append(p);
  document.body.append(div);
}

function promiseReject(messageText) {
  const div = document.createElement('div');
  const p = document.createElement('p');

  div.classList.add('message', 'error-message');
  p.textContent = messageText;
  div.append(p);
  document.body.append(div);
}

promise1.then((result) => promiseResolve(result));
promise2.catch((error) => promiseReject(error));
