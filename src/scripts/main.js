'use strict';

const logoElement = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logoElement.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const appendMessage = (message, isError = false) => {
  const div = document.createElement('div');

  div.classList.add('message', isError && 'error-message');
  div.textContent = message;
  document.body.appendChild(div);
};

promise1.then((message) => appendMessage(message));
promise2.catch((error) => appendMessage(error.message, true));
