'use strict';

const logo = document.querySelector('.logo');

function makeDivBlock(className, text) {
  const newDivBlock = document.createElement('div');

  newDivBlock.className = className;
  newDivBlock.innerHTML = text;
  document.body.appendChild(newDivBlock);
}

new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
}).then((value) => makeDivBlock('message', value));

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
}).catch((value) => makeDivBlock('message error-message', value));
