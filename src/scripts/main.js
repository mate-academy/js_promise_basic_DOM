'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1.then(result => {
  const divSuccess = document.createElement('div');

  divSuccess.classList.add('message');
  divSuccess.textContent = result;

  document.body.append(divSuccess);
});

promise2.catch(result => {
  const divError = document.createElement('div');

  divError.classList.add('error-message');
  divError.textContent = result;

  document.body.append(divError);
});
