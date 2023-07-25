'use strict';

const body = document.querySelector('body');

function showMessage(message, isError = false) {
  const messageBlock = document.createElement('div');

  messageBlock.className = isError ? 'error-message' : 'message';
  messageBlock.innerText = message;
  body.insertAdjacentElement('beforeend', messageBlock);
}

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((res) => {
  showMessage(res);
});

promise2.catch((error) => {
  showMessage(error.message, true);
});
