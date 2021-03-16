'use strict';

const logo = document.querySelector('.logo');
const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');

successMessage.className = 'message';
successMessage.textContent = 'Promise was resolved!';
errorMessage.className = 'error-message';
errorMessage.textContent = 'Promise was rejected!';

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

firstPromise.then(
  () => document.body.append(successMessage)
);

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

secondPromise.catch(
  () => {
    document.body.append(errorMessage);
    setTimeout(() => errorMessage.remove(), 3000);
  }
);
