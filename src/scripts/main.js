'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function createNewMessage(classList, message) {
  const item = document.createElement('div');

  item.classList = classList;
  item.innerHTML = message;

  body.append(item);
}

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => {
  createNewMessage('message', 'Promise was resolved!');
});

promise2.catch(() => {
  createNewMessage('error-message message', 'Promise was rejected!');
});
