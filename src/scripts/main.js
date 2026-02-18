'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener(
    'click',
    () => {
      resolve('Promise was resolved!');
    },
    { once: true },
  );
});

promise1.then((message) => {
  showMessage(message);
});

promise1.catch((error) => {
  showMessage(error.message, true);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then((message) => {
  showMessage(message);
});

promise2.catch((error) => {
  showMessage(error.message, true);
});

function showMessage(message, isError = false) {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message');
  errorMessage.classList.toggle('error-message', isError);
  errorMessage.textContent = message;
  document.body.append(errorMessage);
}
