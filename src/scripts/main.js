'use strict';

// promise1: resolve on click on .logo

const promise1 = new Promise((resolve, reject) => {
  const imgLogo = document.querySelector('.logo');

  imgLogo.addEventListener('click', () => {
    resolve();
  });
});

// promise2: reject after 3 seconds

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject( new Error('Promise was rejected after 3 seconds'));
  }, 3000);
});

// Success handler

function handleSuccess() {
  const newElement = document.createElement('div');

  newElement.classList.add('message');
  newElement.textContent = 'Promise was resolved!';
  document.body.appendChild(newElement);
}

// Error handler

function handleError() {
  const errorElement = document.createElement('div');

  errorElement.classList.add('message', 'error-message');
  errorElement.textContent = 'Promise was rejected!';
  document.body.appendChild(errorElement);
}

// Attach handlers

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
