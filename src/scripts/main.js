'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(function (resolve, reject) {
  logo.addEventListener('click', function () {
    resolve();
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error());
  }, 3000);
});

function handleSuccess() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.append(div);
}

function handleError() {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  body.append(div);
}

promise1.then(handleSuccess).catch(handleError);

promise2.then(handleSuccess).catch(handleError);
