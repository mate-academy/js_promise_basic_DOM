'use strict';

const logo = document.querySelector('.logo');

// logo.addEventListener('click', () => {
//   console.log('click!');
// });

const promise1 = new Promise((resolve, reject) => {
  if (!logo) {
    reject(new Error());
  }

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

Promise.race([promise1, promise2])
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.body.appendChild(message);
  })
  .catch(() => {
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = 'Promise was rejected!';
    document.body.appendChild(message);
  });
