'use strict';

const buttonLogo = document.querySelector('.logo');

const promiseResolved = new Promise(resolve => {
  buttonLogo.addEventListener('click', () => {
    resolve('Promise resolved');
  });
});

const promiseRejected = new Promise((resolve, reject) => {
  buttonLogo.addEventListener('click', () => {
    setTimeout(() => reject(new Error('rejected in 3 seconds')), 3000);
  });
});

const createBlock = param => {
  const div = document.createElement('div');

  div.innerHTML = param;
  document.body.append(div);
  div.classList.add('message');

  (typeof param === 'object') && div.classList.add('error-message');
};

promiseResolved.then(createBlock);
promiseRejected.catch(createBlock);
