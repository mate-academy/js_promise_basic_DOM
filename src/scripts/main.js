'use strict';

const logo = document.querySelector('.logo');

const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.className = 'message';
errorMessage.className = 'error-message';

message.innerText = 'Promise was resolved!';
errorMessage.innerText = 'Promise was rejected!';

document.querySelector('body').addEventListener('click', (even) => {
  if (logo === even.target) {
    return new Promise(function(resolve, reject) {
      resolve(logo.append(message));
    });
  }
});

const error = new Promise(function(resolve, reject) {
  setTimeout(() => reject(document.querySelector('body')
    .append(errorMessage)), 3000);
});

error.then();
