'use strict'

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((result) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = result;
  document.body.appendChild(message);

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise was rejected!');
    }, 3000);
  });

  return promise2;
}).then((result) => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = result;
  document.body.appendChild(message);
});
