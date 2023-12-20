'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Resolved value');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected'));
  }, 3000);
});

const handleSuccess = () => {
  const successDiv = document.createElement('div');

  successDiv.classList.add('message');
  successDiv.textContent = 'Promise was resolved!';
  document.body.append(successDiv);
};

const handleFailure = () => {
  const successDiv = document.createElement('div');

  successDiv.classList.add('message', 'error-message');
  successDiv.textContent = 'Promise was rejected!';
  document.body.append(successDiv);
};

promise1
  .then(handleSuccess)
  .catch(handleFailure);

promise2
  .then(handleSuccess)
  .catch(handleFailure);
