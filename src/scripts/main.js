'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');

function createPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setInterval(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

const click = createPromise();
const error = createPromise();

click.then(() => {
  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  logo.after(message);
});

error.catch(() => {
  message.className = 'error-message';
  message.textContent = 'Promise was rejected!';
  logo.after(message);
});
