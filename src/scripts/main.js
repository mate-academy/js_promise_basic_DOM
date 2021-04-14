'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function createSuccessBlock() {
  body.insertAdjacentHTML('beforebegin', `
  <div class="message">
    Promise was resolved!
  </div>`);
}

function createErrorBlock() {
  body.insertAdjacentHTML('beforebegin', `
    <div class="message error-message">
      Promise was rejected!
    </div>`);
}

const successPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

successPromise
  .then(() => {
    createSuccessBlock();
  });

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

errorPromise
  .catch(() => {
    createErrorBlock();
  });
