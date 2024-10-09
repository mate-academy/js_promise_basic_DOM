'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

function successHandler() {
  createDiv('message', 'Promise was resolved!');
}

function errorHandler() {
  createDiv('message error-message', 'Promise was rejected!');
}

function createDiv(className, message) {
  const div = document.createElement('div');

  div.className = className;
  div.innerText = message;
  document.body.append(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
