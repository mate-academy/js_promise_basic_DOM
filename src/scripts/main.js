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

const handleSuccess = (message) => {
  const divElement = document.createElement('div');

  divElement.classList.add('message');
  divElement.textContent = message;

  document.body.append(divElement);
};

const handleError = (message) => {
  const divElement = document.createElement('div');

  divElement.classList.add('message', 'error-message');
  divElement.textContent = message.message;

  document.body.append(divElement);
};

promise1.then(handleSuccess);
promise2.then().catch(handleError);
