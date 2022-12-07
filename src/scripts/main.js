'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.getElementById('logo');

  logo.addEventListener('click', e => {
    return resolve('resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject(Error('rejected'));
  }, 3000);
});

const successHandler = result => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerHTML = 'Promise was resolved!';
  document.body.appendChild(message);
};

const errorHandler = result => {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.innerHTML = 'Promise was rejected!';
  document.body.appendChild(message);
};

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
