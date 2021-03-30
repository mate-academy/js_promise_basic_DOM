'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const addMessage = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';

  body.append(message);
};

const addErrorMessage = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Promise was rejected!';

  body.append(errorMessage);
};

const promiseOne = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promiseOne.then(addMessage);
promiseTwo.catch(addErrorMessage);
