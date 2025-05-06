'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(
    () => reject(new Error('Waiting for too long for button pressing')),
    3000,
  );
});

function successHandler() {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.append(div);
}

function errorHandler() {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  body.append(div);
}

promise1.then(successHandler);
promise2.catch(errorHandler);
