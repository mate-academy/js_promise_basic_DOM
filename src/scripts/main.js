'use strict';

const logoElement = document.querySelector('.logo');
const promise1 = new Promise((resolve) => {
  logoElement.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('err'));
  }, 3000);
});

const handleSuccess = () => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = 'Promise was resolved!';
  document.body.append(messageDiv);
};

const handleError = () => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message', 'error-message');
  messageDiv.textContent = 'Promise was rejected!';
  document.body.append(messageDiv);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
