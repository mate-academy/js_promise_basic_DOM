'use strict';

const body = document.querySelector('body');
const logoMA = document.querySelector('h1');

const createNotification = function(message, className) {
  const DIV = `<div class='${className}'>${message}</div>`;
  body.insertAdjacentHTML('beforeend', DIV)
}

const promise1 = new Promise((resolve, reject) => {
  logoMA.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise regected!!!'));
  }, 3000);
});

promise1.then(() => {
  createNotification('Promise was resolved!','message');
});

promise2.catch(() => {
  createNotification('Promise was rejected!','message error-message');
});
