'use strict';

const body = document.querySelector('body');

function createPromise() {
  const buttonToClick = document.querySelector('.logo');

  const resolver = (resolve, reject) => {
    buttonToClick.addEventListener('click', () => {
      const message = document.createElement('div');

      message.classList.add('message');
      message.textContent = 'Promise was resolved!';

      body.append(message);
    });

    setTimeout(() => {
      const errorMessage = document.createElement('div');

      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'Promise was rejected!';

      body.append(errorMessage);
    }, 3000);
  };

  return new Promise(resolver);
}

createPromise();
