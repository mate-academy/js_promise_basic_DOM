'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(onSuccess)
  .catch(onError);

promise2
  .then(onSuccess)
  .catch(onError);

function onSuccess() {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  body.append(div);
  div.className = 'message';
  div.textContent = 'Promise was resolved!';
}

function onError() {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  body.append(div);
  div.className = 'error-message';
  div.textContent = 'Promise was rejected!';
}
