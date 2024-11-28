'use strict';

const logo = document.querySelector('.logo');

const promise2 = new Promise((resolve, reject) => {
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('message');
  errorDiv.classList.add('error-message');
  errorDiv.textContent = 'Promise was rejected!';

  setTimeout(() => {
    reject(errorDiv);
  }, 3000);
});

promise2.catch((div) => document.body.appendChild(div));

const promise1 = new Promise((resolve, reject) => {
  const succesDiv = document.createElement('div');

  succesDiv.classList.add('message');
  succesDiv.textContent = 'Promise was resolved!';
  resolve(succesDiv);
});

logo.addEventListener('click', () => {
  promise1.then((div) => document.body.appendChild(div));
});
