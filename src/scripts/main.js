'use strict';

const logo = document.querySelector('.logo');

const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.className = 'message';
errorMessage.className = 'error-message';

message.innerText = 'Promise was resolved!';
errorMessage.innerText = 'Promise was rejected!';

const resolveMessage = new Promise(function(resolve, reject) {
  document.querySelector('body').addEventListener('click', (even) => {
    if (logo === even.target) {
      resolve(logo.append(message));
    };
  });
});

resolveMessage.then();

const error = new Promise(function(resolve, reject) {
  setTimeout(() => reject(document.querySelector('body')
    .append(errorMessage)), 3000);
});

error.then();
