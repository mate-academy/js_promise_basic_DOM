'use strict';

// write your code here
const logo = document.querySelector('.logo');

function getSuccess() {
  const mainContainer = document.createElement('div');

  mainContainer.classList.add('message');
  mainContainer.textContent = 'Promise was resolved!';
  document.body.appendChild(mainContainer);
}

function getError() {
  const mainContainer = document.createElement('div');

  mainContainer.classList.add('message', 'error-message');
  mainContainer.textContent = 'Promise was rejected!';
  document.body.appendChild(mainContainer);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(getSuccess).catch(getError);
promise2.then(getSuccess).catch(getError);
