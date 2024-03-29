/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

const printMessage = (message, className = '') => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
<div class="message ${className}">
  ${message}
</div>
`,
  );
};

promise1.then(() => printMessage('Promise was resolved!'));
promise2.catch(() => printMessage('Promise was rejected!', 'error-message'));
