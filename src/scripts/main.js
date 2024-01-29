'use strict';

// write your code here
const logo = document.querySelector('.logo');
const succesDiv = document.createElement('div');
const errorDiv = document.createElement('div');

succesDiv.classList.add('message');
errorDiv.classList.add('message', 'error-message');

const succesMessage = document.createTextNode('Promise was resolved!');
const errorMessage = document.createTextNode('Promise was rejected!');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(errorMessage));
  }, 3000);
});

promise1
  .then(() => {
    succesDiv.appendChild(succesMessage);
    document.body.appendChild(succesDiv);
  });

promise2
  .catch(() => {
    errorDiv.appendChild(errorMessage);
    document.body.appendChild(errorDiv);
  });
