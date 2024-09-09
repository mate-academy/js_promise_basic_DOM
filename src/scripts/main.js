'use strict';

  let promise1 = new Promise((resolve, reject) => {
    document.querySelector('.logo').addEventListener('click', () => {
      resolve();
    });
  });

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 3000);
  });

  function handleSuccess() {
    const successMessage = document.createElement('div');
    successMessage.classList.add('message');
    successMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(successMessage);
  }

  function handleError() {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  }

  promise1.then(handleSuccess).catch(handleError);
  promise2.then(handleSuccess).catch(handleError);

