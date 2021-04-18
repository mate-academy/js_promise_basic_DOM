'use strict';

const body = document.querySelector('body');

document.querySelector('.logo')
  .addEventListener('click', () => {
    const message = document.createElement('div');

    message.textContent = 'Promise was resolved!';
    message.classList.add('message');
    body.appendChild(message);
  });

setTimeout(() => {
  const errorMessage = document.createElement('div');

  errorMessage.textContent = 'Promise was rejected!';
  errorMessage.classList.add('message');
  errorMessage.classList.add('error-message');
  body.appendChild(errorMessage);
}, 3000);
