'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1
  .then(() => {
    message.classList.add('message');
    message.innerText = 'Promise was resolved!';

    document.body.append(message);
  })
  .catch(() => {
    message.className = 'message error-message';
    message.innerText = 'Promise was rejected!';

    document.body.append(message);
  });

promise2
  .then(() => {
    message.classList.add('message');
    message.innerText = 'Promise was resolved!';

    document.body.append(message);
  })
  .catch(() => {
    message.className = 'message error-message';
    message.innerText = 'Promise was rejected!';

    document.body.append(message);
  });
