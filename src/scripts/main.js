'use strict';

// write your code here
const logo = document.querySelector('.logo');

function createPromise() {
  const resolver = (complete, cancel) => {
    logo.addEventListener('click', () => {
      complete();
    });

    setTimeout(() => {
      cancel();
    }, 3000);
  };

  return new Promise(resolver);
}

const promise = createPromise();

promise
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerText = 'Promise was resolved!';

    document.body.append(message);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'error-message';
    errorMessage.innerText = 'Promise was rejected!';

    document.body.append(errorMessage);
  });
