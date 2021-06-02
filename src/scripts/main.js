'use strict';

const body = document.querySelector('body');
const button = body.querySelector('.logo');

const promice = new Promise((resolve, reject) => {
  const message = document.createElement('div');

  button.onclick = () => {
    message.setAttribute('class', 'message');
    message.innerText = 'Promise was resolved!';

    resolve(message);
  };

  setTimeout(() => {
    message.setAttribute('class', 'error-message');
    message.innerText = 'Promise was rejected!';

    reject(message);
  }, 3000);
});

promice
  .then(result => {
    body.appendChild(result);
  })
  .catch(error => {
    body.appendChild(error);
  });
