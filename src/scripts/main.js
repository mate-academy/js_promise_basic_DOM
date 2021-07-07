'use strict';

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const logo = document.querySelector('.logo');

const resolvedPromise = new Promise((resolve, reject) => {
  logo.onclick = () => {
    resolve('Promise was resolved!');
  };
});

resolvedPromise
  .then((result) => {
    const successMsg = document.createElement('div');

    successMsg.classList.add('message');
    successMsg.innerText = result;
    document.body.appendChild(successMsg);
  });

rejectedPromise
  .catch((error) => {
    const errorMsg = document.createElement('div');

    errorMsg.innerText = error.message;
    errorMsg.classList.add('message');
    errorMsg.classList.add('error-message');
    document.body.appendChild(errorMsg);
  });
