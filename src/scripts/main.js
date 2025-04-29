'use strict';

const logo = document.querySelector('.logo');
const message1 = document.createElement('div');
const errorMessage1 = document.createElement('div');

message1.className = 'message';
errorMessage1.className = 'message error-message';

const message2 = document.createElement('div');
const errorMessage2 = document.createElement('div');

message2.className = 'message';
errorMessage2.className = 'message error-message';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise 2 resolved!');
  });
});

promise1
  .then((messages) => {
    message1.innerHTML = messages;
  })
  .catch((error) => {
    errorMessage1.innerHTML = error;
    logo.appendChild(errorMessage1);
  })
  .finally(() => {
    message1.innerHTML = 'Promise was resolved!';
    logo.appendChild(message1);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 rejected!'));
  }, 3000);
});

promise2
  .then((messages) => {
    message2.innerHTML = messages;
  })
  .catch((error) => {
    errorMessage2.innerHTML = error;
    logo.appendChild(errorMessage2);
  })
  .finally(() => {
    message2.innerHTML = 'Promise was resolved!';
    logo.appendChild(message2);
  });
