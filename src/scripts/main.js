'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Mate Academy Error: Unknown reason is also a reason'));
  }, 3000);
});

const handelSuccess = () => {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.innerText = 'Promise was resolved!✨';

  document.body.append(successMessage);
};

const handleRejection = () => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'error-message';
  errorMessage.innerText = 'Promise was rejected!❌';

  document.body.append(errorMessage);
};

promise1.then(handelSuccess);
promise2.catch(handleRejection);
