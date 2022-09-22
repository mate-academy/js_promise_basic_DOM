'use strict';

const resolver1 = (resolve) => {
  const logo = document.body.querySelector('.logo');

  logo.addEventListener(
    'click',
    () => resolve('Promise was resolved!')
  );
};

const resolver2 = (_, reject) => {
  setTimeout(() => reject('Promise was rejected!'), 3000);
};

const handleResolve = resolve => {
  const success = document.createElement('div');

  success.classList.add('message');
  success.innerText = resolve;
  document.body.append(success);
};

const handleReject = error => {
  const rejected = document.createElement('div');

  rejected.classList.add('message');
  rejected.classList.add('error-message');
  rejected.innerText = error;
  document.body.append(rejected);
};

const promise1 = new Promise(resolver1);
const promise2 = new Promise(resolver2);

promise1
  .then(handleResolve)
  .catch(handleReject);

promise2
  .then(handleResolve)
  .catch(handleReject);
