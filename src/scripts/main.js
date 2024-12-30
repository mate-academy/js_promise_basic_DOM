'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.logo')) {
      resolve('Promise was resolved!');
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((data) => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = data;
    document.body.append(successMessage);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = error.message;
    document.body.append(errorMessage);
  });

promise2
  .then((data) => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = data;
    document.body.append(successMessage);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = error.message;
    document.body.append(errorMessage);
  });
