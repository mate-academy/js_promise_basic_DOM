'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

function succesMessage() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  body.append(div);
};

const cancelMessage = () => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'error-message';
  errorDiv.textContent = 'Promise was rejected!';
  body.append(errorDiv);
};

promise1
  .then(succesMessage);

promise2
  .catch(cancelMessage);
