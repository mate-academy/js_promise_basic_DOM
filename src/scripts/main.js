'use strict';

const logo = document.querySelector('.logo');

const body = document.querySelector('body');

const succesMassage = document.createElement('div');

succesMassage.classList.add('message');

const errorMassage = document.createElement('div');

errorMassage.classList.add('message', 'error-message');

const promice1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promice2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promice1.then((message) => {
  succesMassage.innerText = message;
  body.append(succesMassage);
});

promice2.catch((message) => {
  errorMassage.innerText = message;
  body.append(errorMassage);
});
