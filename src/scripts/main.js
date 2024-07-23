'use strict';

const succsesFunc = (message) => {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.innerText = message;
  document.body.appendChild(successDiv);
};

const errorFunc = (error) => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.innerText = error;
  document.body.appendChild(errorDiv);
};

document.addEventListener('DOMContentLoaded', () => {
  const promise1 = new Promise((resolve, reject) => {
    document.querySelector('.logo').addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Promise was rejected!');
    }, 3000);
  });

  promise1
    .then((message) => {
      succsesFunc(message);
    })
    .catch((error) => {
      errorFunc(error);
    });

  promise2
    .then((message) => {
      succsesFunc(message);
    })
    .catch((error) => {
      errorFunc(error);
    });
});
