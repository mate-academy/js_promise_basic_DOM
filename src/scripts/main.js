'use strict';

const logo = document.querySelector('.logo');

const messageElement = document.createElement('div');

messageElement.innerHTML = `Promise was resolved!`;

messageElement.classList.toggle('message');

const errorMessageElement = document.createElement('div');

errorMessageElement.innerHTML = `Promise was rejected!`;

errorMessageElement.classList = 'message error-message';

const firstPromise = () => {
  const promise = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

  return promise;
};

const secondPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 3000);
  });
};

const promise1 = firstPromise();

const promise2 = secondPromise();

function success() {
  document.body.appendChild(messageElement);
}

function failure() {
  document.body.appendChild(errorMessageElement);
}

promise1.then(success).catch(failure);

promise2.then(success).catch(failure);
