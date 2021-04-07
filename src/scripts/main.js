'use strict';

const logo = document.querySelector('.logo');

class Message {
  constructor(className, text) {
    const newMessage = document.createElement('div');

    newMessage.className = className;
    newMessage.innerText = text;

    return newMessage;
  }
}

const resolvedPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const message = new Message('message', 'Promise was resolved!');

    resolve(message);
  });
});

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const errorMessage = new Message('error-message', 'Promise was rejected!');

    reject(errorMessage);
  }, 3000);
});

resolvedPromise
  .then(result => {
    document.body.append(result);
  });

rejectedPromise
  .catch(error => {
    document.body.append(error);
  });
