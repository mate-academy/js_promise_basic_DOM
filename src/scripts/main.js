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

function logoResolve(message, isError = false) {
  const logo = document.createElement('div');

  logo.className = 'message';

  if (logo) {
    logo.textContent = message;
  }

  document.body.append(logo);
}

function logoRejected(message, isError = false) {
  const logo = document.createElement('div');

  logo.className = 'message error-message';

  if (logo) {
    logo.textContent = message;
  }

  document.body.append(logo);
}

promise1
  .then((message) => logoResolve(message))
  .catch((error) => logoResolve(error.message, true));

promise2
  .then((message) => logoRejected(message))
  .catch((error) => logoRejected(error.message, true));
