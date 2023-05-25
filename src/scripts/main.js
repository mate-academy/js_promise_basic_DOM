'use strict';

const errorMessage = () => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.innerHTML = 'Promise was rejected!';
  document.body.append(message);
};

const succesMessage = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerHTML = 'Promise was resolved!';
  document.body.append(message);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve(succesMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

promise1
  .then(succesMessage)
  .catch(errorMessage);

promise2
  .then(succesMessage)
  .catch(errorMessage);
