'use strict';

function promise1() {
  return new Promise((resolve, reject) => {
    const logo = document.getElementById('logo');

    logo.addEventListener('click', () => {
      const successDiv = document.createElement('div');

      successDiv.classList.add('message');
      successDiv.textContent = 'Promise was resolved!';
      document.body.appendChild(successDiv);

      resolve();
    });
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorDiv = document.createElement('div');

      errorDiv.classList.add('message');
      errorDiv.classList.add('error-message');
      errorDiv.textContent = 'Promise was rejected!';
      document.body.appendChild(errorDiv);

      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
}

promise1()
  .then(() => {
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.textContent = error;
    errorMessage.classList.add('error-message');
    document.body.appendChild(errorMessage);
  });

promise2()
  .then(() => {
  })
  .catch(() => {
  });
