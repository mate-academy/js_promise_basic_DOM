'use strict';

const logo = document.querySelector('.logo');
const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');
const timeout = 3000;

successMessage.className = 'message';
successMessage.textContent = 'Promise was resolved';
errorMessage.className = 'error-message';
errorMessage.textContent = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

promise1.then(
  () => document.body.append(successMessage)
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), timeout);
});

promise2.catch(
  () => {
    document.body.append(errorMessage);

    setTimeout(() =>
      errorMessage.remove, timeout);
  }
);
