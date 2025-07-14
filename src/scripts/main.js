'use strict';

const logo = document.querySelector('.logo');

const message = document.createElement('div');
message.classList.add('message');
message.textContent = 'Promise was resolved!';

const error = document.createElement('div');
error.classList.add('message', 'error-message');
error.textContent = 'Promise was rejected!';

let rejected = false;

logo.addEventListener('click', () => {
  const promise1 = Promise.resolve();
  promise1.then(() => {
    document.body.appendChild(message);
  });

  if (!rejected) {
    rejected = true;
    const promise2 = new Promise((_, reject) => {
      setTimeout(() => {
        reject();
      }, 3000);
    });

    promise2.catch(() => {
      document.body.appendChild(error);
    });
  }
});
