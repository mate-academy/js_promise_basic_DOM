'use strict';

const logoElement = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logoElement.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const createMessageElement = (className, text) => {
  const newElement = document.createElement('div');

  newElement.classList.add(className);
  newElement.textContent = text;
  document.body.append(newElement);
};

const successhandler = () => {
  createMessageElement('message', 'Promise was resolved!');
};

const errorHandler = () => {
  createMessageElement('error-message', 'Promise was rejected!');
};

promise1.then(successhandler).catch(errorHandler);
promise2.then(successhandler).catch(errorHandler);
