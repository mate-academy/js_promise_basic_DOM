'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const createMessage = (className, text) => {
  const element = document.createElement('div');

  element.classList.add(className);
  element.textContent = text;
  document.body.append(element);
};

const successHandler = () => {
  createMessage('message', 'Promise was resolved!');
};

const errorHandler = () => {
  createMessage('error-message', 'Promise was rejected!');
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
