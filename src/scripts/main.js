'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(result => getSuccessMessage());
promise1.catch(er => getErrorMessage());

promise2.then(result => getSuccessMessage());
promise2.catch(er => getErrorMessage());

const body = document.querySelector('body');
const message = document.createElement('div');

function getSuccessMessage() {
  message.className = 'message';
  message.innerText = 'Promise was resolved!';
  body.append(message);
}

function getErrorMessage() {
  message.className = 'error-message';
  message.classList.add('message');
  message.innerText = 'Promise was rejected!';
  body.append(message);
}
