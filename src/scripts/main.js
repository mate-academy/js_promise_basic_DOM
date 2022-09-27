'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);

function onSuccess() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = 'Promise was resolved!';
  body.append(message);
};

function onError() {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('error-message');
  errorMessage.innerText = 'Promise was rejected!';
  body.append(errorMessage);
}
