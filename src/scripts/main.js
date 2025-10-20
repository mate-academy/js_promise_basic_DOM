'use strict';

function showMessage(text, className = 'message') {
  const message = document.createElement('div');

  message.className = className;
  message.textContent = text;
  document.body.appendChild(message);
}

function successHandler() {
  showMessage('Promise was resolved!');
}

function errorHandler() {
  showMessage('Promise was rejected!', 'message error-message');
}

const promise1 = new Promise((resolve, reject) => {
  const getLogo = document.querySelector('.logo');

  if (!getLogo) {
    reject(new Error('Logo not found'));

    return;
  }

  getLogo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
