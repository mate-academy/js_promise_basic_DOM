'use strict';

// write your code here
const body = document.querySelector('body');
const logo = body.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = document.createElement('div');

const messageText = 'Promise was resolved!';
const errorMessageText = 'Promise was rejected!';

message.className = 'message';
errorMessage.className = 'error-message';
errorMessage.classList.add('message');

logo.addEventListener('click', (e) => {
  const promise1 = Promise.resolve(messageText);

  promise1
    .then(value => {
      message.innerText = value;
      body.append(message);
    });
});

const promise2 = Promise.reject(errorMessageText);

setTimeout(() => {
  promise2
    .catch(error => {
      errorMessage.innerText = error;
      body.append(errorMessage);
    });
}, 3000);
