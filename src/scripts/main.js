'use strict';

const mainPage = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.innerHTML = 'Promise was resolved!';
  mainPage.append(message);
});

const promise2 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    setTimeout(() =>
      reject(new Error('Error'))
    , 3000);
  });
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.className = 'error-message';
  message.innerHTML = 'Promise was rejected';
  mainPage.append(message);
});
