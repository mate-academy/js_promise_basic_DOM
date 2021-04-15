'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function createMessageBlock(classes, message) {
  body.insertAdjacentHTML('beforebegin', `
  <div class="${classes}">
      ${message}
  </div>`);
}

const successPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

successPromise
  .then(() => {
    createMessageBlock('message', 'Promise was resolved!');
  });

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

errorPromise
  .catch(() => {
    createMessageBlock('message error-message', 'Promise was rejected!');
  });
