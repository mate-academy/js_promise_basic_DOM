'use strict';

const createSuccessMessage = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';

  return message;
};

const createErrorMessage = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';

  return errorMessage;
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(() => {
    document.body.append(createSuccessMessage());
  })
  .catch(() => {
    document.body.append(createErrorMessage());
  });

promise2
  .then(() => {
    document.body.append(createSuccessMessage());
  })
  .catch(() => {
    document.body.append(createErrorMessage());
  });
