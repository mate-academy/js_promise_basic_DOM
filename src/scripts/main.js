'use strict';

const logo = document.querySelector('.logo');

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.innerText = error.message;
  document.body.append(message);
});

logo.addEventListener('click', (e) => {
  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  promise1.then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.innerText = 'Promise was resolved!';
    document.body.append(message);
  });
});
