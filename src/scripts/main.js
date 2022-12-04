'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', resolve);
});

promise1.then(onSuccess, onError);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.then(onSuccess, onError);

function onSuccess() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
}

function onError() {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
}
