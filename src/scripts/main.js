'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const createSuccessMessage = (data) => {
  const body = document.querySelector('body');
  const successDiv = document.createElement('div');

  successDiv.classList.add('message');
  successDiv.innerText = data;
  body.appendChild(successDiv);
};

const createErrorMessage = (err) => {
  const body = document.querySelector('body');
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('error-message');
  errorDiv.innerText = err;
  body.appendChild(errorDiv);
};

const resolver = (promise) => {
  promise
    .then((data) => {
      createSuccessMessage(data);
    })
    .catch((err) => {
      createErrorMessage(err);
    });
};

resolver(promise1);
resolver(promise2);
