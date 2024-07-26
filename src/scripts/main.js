'use strict';

const createDiv = document.createElement('div');
const body = document.querySelector('body');
const message = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  message.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handleSuccess = () => {
  createDiv.className = 'message';
  createDiv.textContent = 'Promise was resolved!';
  body.append(createDiv);
};

const handleError = (error) => {
  createDiv.className = 'message error-message';
  createDiv.textContent = error.message;
  body.append(createDiv);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
