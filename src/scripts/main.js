'use strict';

// write your code here
const logo = document.querySelector('.logo');
const successMessage = 'Promise was resolved!';
const errorMessage = 'Promise was rejected!';
const div1 = document.createElement('div');
const div2 = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(successMessage);
  });

  setTimeout(() => {
    reject(errorMessage);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(successMessage);
  });

  setTimeout(() => {
    reject(errorMessage);
  }, 2000);
});

promise1
  .then(() => {
    div1.className = 'message';
    div1.innerHTML = successMessage;
    document.body.append(div1);
  })
  .catch(() => {
    div1.classList.add('message', 'error-message');
    div1.innerHTML = errorMessage;
    document.body.append(div1);
  });

promise2
  .then(() => {
    div2.className = 'message';
    div2.innerHTML = successMessage;
    document.body.append(div2);
  })
  .catch(() => {
    div2.classList.add('message', 'error-message');
    div2.innerHTML = errorMessage;
    document.body.append(div2);
  });
