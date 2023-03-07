'use strict';

// write your code here
const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');

const promise1 = new Promise(function(resolve) {
  const logo = document.querySelector('.logo');

  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved!';

  logo.addEventListener('click', () => {
    resolve(document.body.append(successMessage));
  });
});

const promise2 = new Promise(function(resolve, reject) {
  errorMessage.textContent = 'Promise was rejected!';
  errorMessage.className = 'error-message';

  setTimeout(() => {
    reject(document.body.append(errorMessage));
  }, 3000);
});

promise1.then(successMessage);
promise2.catch(errorMessage);
