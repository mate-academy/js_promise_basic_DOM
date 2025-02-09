'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener(
    'click',
    () => {
      resolve('Promise was resolved!');
    },
    { once: true },
  );
});

const successHandler = (message) => {
  const divElement = document.createElement('div');

  divElement.className = 'message';
  divElement.textContent = message;
  document.body.appendChild(divElement);
};

promise1.then(successHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const errorHandler = (error) => {
  const divElement = document.createElement('div');

  divElement.className = 'message error-message';
  divElement.textContent = error;
  document.body.appendChild(divElement);
};

promise2.catch(errorHandler);
