'use strict';

const root = document.querySelector('body');
const logo = root.querySelector('.logo');

function message(text, className) {
  root.insertAdjacentHTML('beforeend', `
    <div class="${className}">
      ${text}
    </div>
  `);
}

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 3000);
});

promise1.then((resolve) => message(resolve, 'message'));
promise2.catch((error) => message(error.message, 'error-message'));
