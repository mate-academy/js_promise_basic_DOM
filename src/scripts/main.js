'use strict';

const body = document.querySelector('body');
const button = body.querySelector('.logo');

function promiseResolve() {
  return new Promise((resolve) => {
    button.onclick = () => {
      const messageResolve = document.createElement('div');

      messageResolve.setAttribute('class', 'message');
      messageResolve.innerText = 'Promise was resolved!';

      resolve(body.appendChild(messageResolve));
    };
  });
}

function promiseReject() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const messageReject = document.createElement('div');

      messageReject.setAttribute('class', 'error-message');
      messageReject.innerText = 'Promise was rejected!';

      resolve(body.appendChild(messageReject));
    }, 3000);
  });
}

promiseResolve();
promiseReject();
