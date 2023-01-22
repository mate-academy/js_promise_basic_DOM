'use strict';

const logo = document.getElementById('logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    return resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject(Error('Promise was rejected!'));
  }, 3000);
});

const handleSuccess = (result) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerHTML = 'Promise was resolved!';
  document.body.appendChild(message);
};

const handleError = (result) => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('error-message');
  errorMessage.innerHTML = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1
  .then(handleSuccess)
  .catch(handleError);

promise2
  .then(handleSuccess)
  .catch(handleError);
