'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const message = document.createElement('div');

message.classList.add('message');
message.innerText = 'Promise was resolved!';

const messageError = document.createElement('div');

messageError.classList.add('message');
messageError.classList.add('error-message');
messageError.innerText = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
    // if (logo) {
    //   resolve(document.querySelector('body').appendChild(message));
    // } else {
    //   reject(document.querySelector('body').appendChild(messageError));
    // }
  });
});

promise1
  .then(() => {
    body.appendChild(message);
  })
  .catch(() => {
    body.appendChild(messageError);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(document.querySelector('body').appendChild(messageError));
  }, 2000);
});

promise2
  .then(() => {
    body.appendChild(message);
  })
  .catch(() => {
    body.appendChild(messageError);
  });
