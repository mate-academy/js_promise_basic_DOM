'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function successHandler() {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.textContent = 'Promise was resolved!';

  document.body.append(newDiv);
}

function errorHandler(error) {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message', 'error-message');
  newDiv.textContent = error.message;

  document.body.append(newDiv);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
