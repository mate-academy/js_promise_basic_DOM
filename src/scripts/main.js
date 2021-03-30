'use strict';

// write your code here
const logo = document.querySelector('.logo');

function firstPromise() {
  const resolver = (resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  };

  return new Promise(resolver);
}

function secondPromise() {
  const resolver = (_, rejected) => {
    setTimeout(() => {
      rejected();
    }, 3000);
  };

  return new Promise(resolver);
}

firstPromise()
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerText = 'Promise was resolved!';

    document.body.append(message);
  });

secondPromise()
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.innerText = 'Promise was rejected!';

    document.body.append(errorMessage);
  });
