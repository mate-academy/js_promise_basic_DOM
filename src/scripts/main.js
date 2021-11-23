'use strict';

const logo = document.querySelector('.logo');

new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
}).then(message => showMessage(message));

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
}).catch(message => showMessage(message, 'error-message'));

function showMessage(message, className = '') {
  return document.body.insertAdjacentHTML('afterbegin',
    `<div class='message ${className}'>${message}</div>`
  );
}
