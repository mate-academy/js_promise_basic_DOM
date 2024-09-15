'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const successHandler = (dataFromResolve) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = dataFromResolve;
  document.body.append(div);
};

const errorHandler = (dataFromReject) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.innerText = dataFromReject;
  document.body.append(div);
};

promise1.then(successHandler);
promise2.catch(errorHandler);
