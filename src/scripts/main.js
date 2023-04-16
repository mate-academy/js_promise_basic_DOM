'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const onSuccess = () => {
  const resolveMessage = document.createElement('div');

  resolveMessage.classList.add('message');
  resolveMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(resolveMessage);
};

const onError = () => {
  const rejectMessage = document.createElement('div');

  rejectMessage.classList.add('error-message');
  rejectMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(rejectMessage);
};

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);
