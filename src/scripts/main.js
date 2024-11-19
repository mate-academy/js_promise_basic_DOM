'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

const onSuccess = () => {
  const successMessage = document.createElement('div');
  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessage);
};

const onError = () => {
  const errorMessage = document.createElement('div');
  errorMessage.className = 'message error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1
  .then(onSuccess)
  .catch(onError);

promise2
  .then(onSuccess)
  .catch(onError);

