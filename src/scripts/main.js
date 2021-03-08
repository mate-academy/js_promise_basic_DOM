'use strict';

// write your code here

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const message = document.createElement('DIV');

message.classList.add('message');

const firstPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });

  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const secondPromise = new Promise((resolve, reject) => {
  reject(new Error());
});

firstPromise
  .then((messageText) => {
    message.innerText = messageText;
  })
  .catch(() => {
    secondPromise
      .catch(() => {
        message.classList.add('error-message');
        message.innerText = 'Promise was rejected!';
      });
  })
  .finally(() => {
    body.prepend(message);
  });
