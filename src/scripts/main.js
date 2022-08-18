'use strict';

// write your code here
const root = document.querySelector('body');
const logo = root.querySelector('.logo');

const addMessage = (elClass, message) => {
  root.insertAdjacentHTML('beforeend',
    `<div class="${elClass}">
      Promise was ${message}!
    </div>`);
};

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});

promise1.then(() => addMessage('message', 'resolved'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.catch(() => addMessage('error-message', 'rejected'));
