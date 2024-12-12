'use strict';

const successMessage = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.innerText = 'Promise was resolved!';

  return document.body.append(message);
};

const errorMessage = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.innerText = 'Promise was rejected!';

  return document.body.append(message);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(successMessage).catch(errorMessage);

promise2.then(successMessage).catch(errorMessage);
