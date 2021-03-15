'use strict';

const logo = document.querySelector('.logo');

function createPromise() {
  const resolver = (complete, cancel) => {
    const errorMessage = setTimeout(() => {
      cancel();
    }, 3000);

    logo.addEventListener('click', () => {
      complete();
      clearInterval(errorMessage);
    });
  };

  return new Promise(resolver);
}

const promise1 = createPromise();

promise1
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
