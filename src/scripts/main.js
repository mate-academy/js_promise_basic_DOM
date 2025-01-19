'use strict';

const promise1 = new Promise(function (resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((message) => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = error;
    document.body.appendChild(errorDiv);
  });

promise2
  .then((message) => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = error;
    document.body.appendChild(errorDiv);
  });
