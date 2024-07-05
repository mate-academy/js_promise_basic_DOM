'use strict';

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
  divTag.textContent = 'Promise was resolved!';

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
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(errorHandler);
