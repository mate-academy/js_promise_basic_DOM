'use strict';

// write your code here

const logo = document.querySelector('.logo');

logo.style.cursor = 'pointer';

const successMessage = document.createElement('div');

successMessage.className = 'message';
successMessage.innerText = 'Promise was resolved!';

const errorMessage = document.createElement('div');

errorMessage.classList.add('message', 'error-message');
errorMessage.innerText = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  document.body.append(successMessage);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(() => {
  document.body.append(errorMessage);
});
