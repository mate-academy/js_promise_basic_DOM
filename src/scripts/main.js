'use strict';

// write your code here
const logo = document.body.querySelector('.logo');

function createMessage(message, className) {
  logo.insertAdjacentHTML('afterend', `
    <div class=${className}>${message}</div>
  `);
}

const reesolvedPromise = new Promise(resolve => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

reesolvedPromise.then(message => {
  createMessage(message, 'message');
});

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('something bad happened'));
  }, 3000);
});

rejectedPromise.then(null, () => {
  createMessage('Promise was rejected!', 'error-message');
});
