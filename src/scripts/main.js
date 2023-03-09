'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const success = document.createElement('div');

    success.className = 'message';
    success.textContent = 'Promise was resolved!';

    resolve(
      body.append(success)
    );
  }
  );
});

promise1
  .then(result => { })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.textContent = 'Promise was rejected!';
    body.append(errorMessage);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout((error) => {
    reject(error);
  }, 3000);
});

promise2
  .then(result => { })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.textContent = 'Promise was rejected!';
    body.append(errorMessage);
  });
