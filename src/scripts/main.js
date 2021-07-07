'use strict';

const logo = document.querySelector('.logo');

function makeDivBlock(className, text) {
  const createMessage = document.createElement('div');

  createMessage.className = className;
  createMessage.innerHTML = text;
  document.body.appendChild(createMessage);
}

new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
}).then((value) => makeDivBlock('message', value));

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
}).catch((value) => makeDivBlock('message error-message', value));
