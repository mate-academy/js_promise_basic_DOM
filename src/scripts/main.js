'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

function onSuccess() {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function onError() {
  const div = document.createElement('div');
  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
