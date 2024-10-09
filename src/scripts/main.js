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
  const div = document.createElement('div');

  div.className = 'message';
  div.innerText = 'Promise was resolved!';
  document.body.append(div);
}

function errorHandler() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.innerText = 'Promise was rejected!';
  document.body.append(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
