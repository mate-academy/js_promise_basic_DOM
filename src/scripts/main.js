'use strict';

const logo = document.querySelector('.logo');

function createDiv(...classList) {
  const div = document.createElement('div');

  div.classList.add(...classList);

  return div;
}

function successHandler(data) {
  const message = createDiv('message');

  message.innerHTML = data;
  document.body.append(message);
}

function errorHandler(error) {
  const message = createDiv('message', 'error-message');

  message.innerHTML = error.message;
  document.body.append(message);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then(successHandler).catch(errorHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then(successHandler).catch(errorHandler);
