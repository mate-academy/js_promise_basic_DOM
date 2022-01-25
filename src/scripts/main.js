'use strict';

const promise1 = new Promise(function(resolve, reject) {
  document.querySelector('.logo').addEventListener('click', () => {
    const msg = document.createElement('div');

    msg.className = 'message';
    msg.textContent = 'Promise was resolved!';
    document.body.append(msg);

    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    const msg = document.createElement('div');

    msg.className = 'error-message';
    msg.textContent = `Promise was rejected!`;

    document.body.append(msg);

    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise1
  .then(result => result);

promise2
  .catch(error => error);
