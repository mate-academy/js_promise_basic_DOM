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
  const createdDiv = document.createElement('div');

  document.body.append(createdDiv);
  createdDiv.innerText = result;
  createdDiv.classList.add('message');
});

promise2.catch((result) => {
  const createdDiv = document.createElement('div');

  document.body.append(createdDiv);
  createdDiv.classList.add('error-message');
  createdDiv.innerText = result;
});
