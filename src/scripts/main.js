'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve();
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

const successHandler = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
};

const errorHandler = (error) => {
  const errormessage = document.createElement('div');

  errormessage.classList.add('message', 'error-message');
  errormessage.textContent = `Promise was rejected! ${error.message}`;
  document.body.appendChild(errormessage);
};

Promise.race([promise1, promise2]).then(successHandler).catch(errorHandler);
