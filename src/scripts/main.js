'use strict';

// write your code here
const icon = document.querySelector('.logo');
const successBlock = document.createElement('div');
const errorBlock = document.createElement('div');

successBlock.classList.add(`message`);
errorBlock.classList.add('message', 'error-message');

const resolvedPromis = new Promise((resolve, reject) => {
  icon.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

const rejectedPromis = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

resolvedPromis
  .then((text) => {
    successBlock.innerText = text;
    icon.append(successBlock);
  });

rejectedPromis
  .catch((text) => {
    errorBlock.innerText = text;
    icon.append(errorBlock);
  });
