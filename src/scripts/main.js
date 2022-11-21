'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((result) => {
  const newSuccessDiv = document.createElement('div');

  newSuccessDiv.classList.add('message');
  newSuccessDiv.innerText = result;

  document.body.append(newSuccessDiv);
});

promise2.catch((result) => {
  const newFailedDiv = document.createElement('div');

  newFailedDiv.classList.add('error-message');
  newFailedDiv.innerText = result;

  document.body.append(newFailedDiv);
});
