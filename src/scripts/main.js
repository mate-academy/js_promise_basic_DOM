'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(result => {
    const resolveDiv = document.createElement('div');

    resolveDiv.innerText = result;
    resolveDiv.classList.add('message');

    document.body.appendChild(resolveDiv);
  });

promise2
  .catch(result => {
    const rejectDiv = document.createElement('div');

    rejectDiv.innerText = result;
    rejectDiv.classList.add('error-message');

    document.body.appendChild(rejectDiv);
  });
