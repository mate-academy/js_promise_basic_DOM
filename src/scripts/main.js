'use strict';

// write your code here

const successHandler = document.createElement('div');
const errorHandler = document.createElement('div');

successHandler.className = 'message';
successHandler.textContent = 'Promise was resolved!';
errorHandler.className = 'error-message';
errorHandler.textContent = 'Promise was rejected!';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve(document.body.append(successHandler));
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(document.body.append(errorHandler));
  }, 3000);
});

promise1.then(successHandler);
promise2.catch(errorHandler);
