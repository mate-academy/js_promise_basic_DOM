'use strict';

const body = document.body;
const logo = body.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.className = 'message';
message.textContent = 'Promise was resolved!';
errorMessage.className = `${message.className} error-message`;
errorMessage.textContent = 'Promise was rejected!';

const firstPromise = Promise.resolve(message);
const secondPromise = Promise.reject(errorMessage);

logo.addEventListener('click', () => {
  firstPromise.then(result => body.append(result));

  secondPromise.catch(error => {
    body.append(error);
    setTimeout(() => body.removeChild(errorMessage), 3000);
  });
});
