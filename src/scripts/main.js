'use strict';

// write your code here
const successMessage = document.createElement('div');

successMessage.setAttribute('class', 'message');
successMessage.textContent = 'Promise was resolved!';

const successMessagePromise = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve(successMessage);
  });
});

successMessagePromise.then((success) => {
  document.body.appendChild(success);
});

const errorMessage = document.createElement('div');

errorMessage.setAttribute('class', 'error-message message ');
errorMessage.textContent = 'Promise was rejected!';

const erorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

erorPromise.catch((error) => {
  document.body.appendChild(error);
});
