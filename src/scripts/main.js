'use strict';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});

const succesHandler = (dataFromResolve) => {
  const div = document.createElement('div');

  div.classList.add('message');

  div.innerHTML = dataFromResolve;

  body.append(div);
};

promise1.then(succesHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected');
});

const rejectedHandler = (dataFromReject) => {
  const div = document.createElement('div');

  div.classList.add('error-message');

  div.innerHTML = dataFromReject;

  body.append(div);
};

promise2.catch(rejectedHandler);
