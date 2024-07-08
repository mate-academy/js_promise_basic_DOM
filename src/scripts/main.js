'use strict';

const ERROR_MESSAGE = 'Promise was resolved!';

const logo = document.querySelector('.logo');

const errorHandler = (err) => {
  const divTag = document.createElement('div');

  divTag.classList.add('message', 'error-message');
  divTag.textContent = `${err.message}`;

  document.body.append(divTag);
};

const successHandler = () => {
  const divTag = document.createElement('div');

  divTag.classList.add('message');
  divTag.textContent = ERROR_MESSAGE;

  document.body.append(divTag);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(successHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(ERROR_MESSAGE));
  }, 3000);
});

promise2.catch(errorHandler);
