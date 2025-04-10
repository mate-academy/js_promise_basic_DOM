'use strict';

const successPromise = (message) => {
  const successMessageElement = document.createElement('div');

  successMessageElement.classList.add('message');
  successMessageElement.textContent = message;

  bodyElement.append(successMessageElement);
};

const failPromise = (error) => {
  const successMessageElement = document.createElement('div');

  successMessageElement.classList.add('message', 'error-message');
  successMessageElement.textContent = error.message;

  bodyElement.append(successMessageElement);
};

function firstPromise() {
  const newPromise = new Promise((resolve) => resolve('Promise was resolved!'));

  newPromise.then(successPromise);
}

function secondPromise() {
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
  });

  newPromise.catch(failPromise);
}

const bodyElement = document.querySelector('body');
const logoElement = document.querySelector('.logo');

logoElement.addEventListener('click', firstPromise);
window.onload = secondPromise;
