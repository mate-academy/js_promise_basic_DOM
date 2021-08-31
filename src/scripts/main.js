'use strict';

const body = document.body;
const logo = body.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = message.cloneNode(true);

message.className = 'message';
errorMessage.className = 'message error-message';

const firstPromise = Promise.resolve(message);
const secondPromise = Promise.reject(errorMessage);

logo.addEventListener('click', () => {
  firstPromise.then(result => body.append(result));

  secondPromise.catch(error => {
    body.append(error);
    setTimeout(() => body.removeChild(errorMessage), 3000);
  });
});
