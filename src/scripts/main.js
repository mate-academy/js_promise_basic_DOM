'use strict';

const body = document.body;
const logo = document.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.classList.add('message');
message.textContent = 'Promise was resolved!';
errorMessage.classList.add('message', 'error-message');
errorMessage.textContent = 'Promise was rejected!';

const successHandler = function () {
  body.appendChild(message);
};
const errorHandler = function () {
  body.appendChild(errorMessage);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => {
  successHandler();
});

promise2.catch(() => {
  errorHandler();
});
