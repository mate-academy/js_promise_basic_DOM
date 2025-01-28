'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promiseOne = async () => {
  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });
};

const promiseTwo = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
};

const successMessage = () => {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = 'Promise was resolved!';
  body.append(successDiv);
};

const errorMessage = (error) => {
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('message', 'error-message');
  errorDiv.textContent = error.message;
  body.append(errorDiv);
};

promiseOne().then(successMessage).catch(errorMessage);
promiseTwo().then(successMessage).catch(errorMessage);
