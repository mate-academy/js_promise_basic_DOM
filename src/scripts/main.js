'use strict';

const logo = document.querySelector('.logo');
const success = document.createElement('div');
const error = document.createElement('div');

success.setAttribute('class', 'message');
error.setAttribute('class', 'message error-message');
success.innerText = 'Promise was resolved!';
error.innerText = 'Promise was rejected!';

logo.addEventListener('click', () => {
  return new Promise((resolve, reject) => {
    resolve(document.body.appendChild(success));
  });
});

window.addEventListener('load', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(document.body.appendChild(error));
    }, 3000);
  });
});
