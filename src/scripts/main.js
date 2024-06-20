'use strict';

const logo = document.querySelector('.logo');

const promise1 = Promise;
const promise2 = Promise;

function onSuccess() {
  const message = document.createElement('div');

  message.classList.add('message');

  message.textContent = 'Promise was resolved!';

  document.body.append(message);
}

function onError() {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');

  message.textContent = 'Promise was rejected!';

  document.body.append(message);
}

logo.addEventListener('click', () => {
  promise1.resolve(onSuccess());
});

setTimeout(() => {
  promise2.reject(onError());
}, 3000);
