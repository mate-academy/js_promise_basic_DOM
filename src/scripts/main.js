'use strict';

const body = document.querySelector('body');
const button = body.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  const message = document.createElement('div');

  button.onclick = () => {
    message.setAttribute('class', 'message');
    message.innerText = 'Promise was resolved!';

    resolve(message);
  };
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message = document.createElement('div');

    message.setAttribute('class', 'error-message');
    message.innerText = 'Promise was rejected!';

    reject(message);
  }, 3000);
});

promise1.then(result => body.appendChild(result));

promise2.catch(error => body.appendChild(error));
