'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const onSuccess = () => {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.innerHTML = 'Promise was resolved!';
  document.body.append(successMessage);
};

const onError = () => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.innerHTML = 'Promise was rejected!';
  document.body.append(errorMessage);
};

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
