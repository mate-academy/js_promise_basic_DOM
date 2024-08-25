'use strict';

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

promise1.then(successHandler);
promise2.catch(errorHandler);

function successHandler(result) {
  showMessage('success', result);
}

function errorHandler(result) {
  showMessage('error', result);
}

function showMessage(type, message) {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add(`message`);

  if (type === 'error') {
    messageBlock.classList.add('error-message');
  }
  messageBlock.innerHTML = message;
  document.body.appendChild(messageBlock);
}
