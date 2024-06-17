'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('sorry'));
  }, 3000);
});

const successHandler = () => {
  const divMessage = document.createElement('div');

  divMessage.textContent = 'Promise was resolved!';
  divMessage.classList.add('message');
  document.body.append(divMessage);
};

const errorHandler = () => {
  const divError = document.createElement('div');

  divError.textContent = 'Promise was rejected!';
  divError.classList.add('message', 'error-message');
  document.body.append(divError);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
