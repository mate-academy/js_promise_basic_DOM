'use strict';

const body = document.querySelector('body');
const button = body.querySelector('.logo');

function createPromise() {
  return new Promise((resolve, reject) => {
    button.onclick = () => {
      const messageResolve = document.createElement('div');

      messageResolve.setAttribute('class', 'message');
      messageResolve.innerText = 'Promise was resolved!';

      resolve(body.appendChild(messageResolve));
    };

    setTimeout(() => {
      const messageReject = document.createElement('div');

      messageReject.setAttribute('class', 'error-message');
      messageReject.innerText = 'Promise was rejected!';

      reject(body.appendChild(messageReject));
    }, 3000);
  });
}

createPromise();
