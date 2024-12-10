'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  const onSuccess = () => {
    const successMessage = document.createElement('div');

    successMessage.className = 'message';
    successMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(successMessage);
  };

  const onError = (error) => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'message error-message';
    errorMessage.textContent = error.message;
    document.body.appendChild(errorMessage);
  };

  promise1.then(onSuccess);

  promise2.catch(onError);
});
