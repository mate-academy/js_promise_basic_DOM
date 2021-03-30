'use strict';

// write your code here
function firstPromise() {
  const logo = document.querySelector('.logo');
  const resolver = (resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  };

  return new Promise(resolver);
}

firstPromise()
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';

    document.body.append(message);
  });

function secondPromise() {
  const resolver = (_, reject) => {
    setTimeout(() => {
      reject();
    }, 5000);
  };

  return new Promise(resolver);
}

secondPromise()
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.textContent = 'Promise was rejected!';

    document.body.append(errorMessage);
  });
