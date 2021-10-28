'use strict';

const logo = document.querySelector('.logo');

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.innerText = 'Promise was resolved!';
    resolve(message);
  });
});

firstPromise
  .then((SuccessNotification) => {
    document.body.append(SuccessNotification);
  });

const secondPromise = new Promise((resolve, reject) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add('error-message');
  message.innerText = 'Promise was rejected!';

  setTimeout(() => {
    reject(message);
  }, 3000);
});

secondPromise
  .catch((failNotfication) => {
    document.body.append(failNotfication);
  });
  