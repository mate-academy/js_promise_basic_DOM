'use strict';

const message = document.createElement('div');
const messageError = document.createElement('div');

message.classList.add('message');
message.textContent = 'Promise was resolved!';
messageError.classList.add('message', 'error-message');
messageError.textContent = 'Promise was rejected!';

function getPromise() {
  const logo = document.querySelector('.logo');

  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      document.body.append(message);

      resolve(reject());
    });
  };

  return new Promise(resolver);
};

const promisse = getPromise();

promisse
  .then()
  .catch(() => {
    setTimeout(() => {
      document.body.append(messageError);
    }, 3000);
  });
