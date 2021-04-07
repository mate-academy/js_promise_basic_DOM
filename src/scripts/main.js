'use strict';

// write your code here
const logo = document.querySelector('.logo');

const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.className = 'message';
message.innerText = 'Promise was resolved!';

errorMessage.className = 'error-message';
errorMessage.innerText = 'Promise was rejected!';

const resolvedPromise = Promise.resolve(message);
const rejectedPromise = Promise.reject(errorMessage);

resolvedPromise
  .then(result => {
    logo.addEventListener('click', () => {
      document.body.append(result);
    });
  });

rejectedPromise
  .catch(error => {
    setTimeout(() => {
      document.body.append(error);
    }, 3000);
  });
