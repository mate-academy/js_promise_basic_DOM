'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function clickOnLogo(button) {
  const resolver = (resolve, reject) => {
    if (button) {
      button.addEventListener('click', () => {
        const successMessage = document.createElement('div');

        successMessage.classList.add('message');
        successMessage.textContent = 'Promise was resolved!';
        body.append(successMessage);
        resolve();
      });
    } else {
      setTimeout(() => {
        const errorMessage = document.createElement('div');

        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Promise was rejected!';
        body.append(errorMessage);
        reject();
      }, 3000);
    }
  };

  return new Promise(resolver);
}

const promise1 = clickOnLogo(logo);

promise1.then();

const promise2 = clickOnLogo();

promise2.catch();
