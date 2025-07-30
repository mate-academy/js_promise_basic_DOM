'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  function handleClick() {
    resolve();
    logo.removeEventListener('click', handleClick);
  }

  logo.addEventListener('click', handleClick);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const success = () => {
  const successDiv = document.createElement('div');
  const body = document.querySelector('body');

  successDiv.classList.add('message');
  successDiv.textContent = 'Promise was resolved!';
  body.append(successDiv);
};

const rejected = () => {
  const rejectedDiv = document.createElement('div');
  const body = document.querySelector('body');

  rejectedDiv.classList.add('message', 'error-message');
  rejectedDiv.textContent = 'Promise was rejected';
  body.append(rejectedDiv);
};

promise1.then(success).catch(rejected);
promise2.then(success).catch(rejected);
