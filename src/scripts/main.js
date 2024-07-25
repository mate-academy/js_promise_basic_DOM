'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

function handleSuccess() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Promise was resolved!';
  newDiv.classList.add('message');
  document.querySelector('body').appendChild(newDiv);
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function handleError() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Promise was rejected!';
  newDiv.classList.add('message', 'error-message');
  document.querySelector('body').appendChild(newDiv);
}

promise1.then(handleSuccess);
promise2.then(handleSuccess).catch(handleError);
