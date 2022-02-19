'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Time is out!'));
  }, 3000);
});

const successHandler = () => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('message');
  messageBlock.textContent = `Promise was resolved!`;
  body.append(messageBlock);
};

const errorHandler = () => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('message');
  messageBlock.textContent = `Promise was rejected!`;
  messageBlock.style.top = '160px';
  body.append(messageBlock);
};

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
