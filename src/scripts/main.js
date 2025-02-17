'use strict';

const logo = document.querySelector('.logo');

function handlerSuccess() {
  const messageElement = document.createElement('div');

  messageElement.className = 'message';
  messageElement.innerHTML = 'Promise was resolved!';
  document.body.appendChild(messageElement);
}

function handlerError() {
  const messageElement = document.createElement('div');

  messageElement.className = 'message error-message';
  messageElement.innerHTML = 'Promise was rejected!';
  document.body.appendChild(messageElement);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('error')), 3000);
});

promise1.then(handlerSuccess).catch(handlerError);
promise2.then(handlerSuccess).catch(handlerError);
