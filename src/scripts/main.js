'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const success = document.createElement('div');

success.className = 'message';

logo.style.cursor = 'pointer';

logo.addEventListener('click', () => {
  Promise.resolve(`Promise was resolved!`).then((message) => {
    const textNode = document.createTextNode(message);

    success.appendChild(textNode);
    body.appendChild(success);
  });
});

setTimeout(() => {
  Promise.reject(new Error('Promise was rejected!')).catch((error) => {
    const textNode = document.createTextNode(error.message);

    const errorElement = document.createElement('div');

    error.className = 'error-message';

    errorElement.appendChild(textNode);
    body.appendChild(errorElement);
  });
}, 3.0 * 1000);
