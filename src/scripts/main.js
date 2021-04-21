'use strict';

const body = document.querySelector('body');

publish(document.querySelector('.logo'))
  .then(value => body.appendChild(value));

publishError()
  .catch(value => body.appendChild(value));

function publish(element) {
  return new Promise(resolve => {
    element.addEventListener('click', () => {
      const message = document.createElement('div');

      message.textContent = 'Promise was resolved!';
      message.classList.add('message');

      resolve(message);
    });
  });
}

function publishError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorMessage = document.createElement('div');

      errorMessage.textContent = 'Promise was rejected!';
      errorMessage.classList.add('message');
      errorMessage.classList.add('error-message');

      reject(errorMessage);
    }, 3000);
  });
}
