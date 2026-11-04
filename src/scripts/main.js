'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function showMessage(text, isError) {
  const message = document.createElement('div');

  message.className = isError ? 'message error-message' : 'message';
  message.textContent = text;
  document.body.append(message);
}

const onSuccess = () => showMessage('Promise was resolved!', false);
const onError = () => showMessage('Promise was rejected!', true);

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);
