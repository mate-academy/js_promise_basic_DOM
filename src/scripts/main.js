'use strict';

// write your code here
const body = document.getElementsByTagName('body')[0];
const logo = document.getElementsByClassName('logo')[0];

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorShow);
  }, 3000);
});

function showMessage() {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.innerText = 'Promise was resolved!';

  body.appendChild(successMessage);
}

function errorShow() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
}

promise1.then(showMessage).catch(errorShow);
promise2.then(showMessage).catch(errorShow);
