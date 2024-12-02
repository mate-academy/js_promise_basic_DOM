'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const successCallBack = () => {
  const divSuccess = document.createElement('div');

  divSuccess.classList.add('message');
  divSuccess.innerText = 'Promise was resolved!';

  body.append(divSuccess);
};

const errorCallBack = () => {
  const divError = document.createElement('div');

  divError.classList.add('message error-message');
  divError.innerText = 'Promise was rejected';

  body.append(divError);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('rejected in 3 seconds')), 3000);
});

promise1.then(successCallBack).catch(errorCallBack);
promise2.then(successCallBack).catch(errorCallBack);
