'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

function solution() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}

function errorFound() {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
}

promise1.then(solution);

promise1.catch(errorFound);

promise2.then(solution);

promise2.catch(errorFound);
