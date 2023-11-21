'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(onSuccess);
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(onError), 3000);
});

function onSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
}

function onError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
}

promise1.then(onSuccess);
promise2.catch(onError);
