'use strict';

const logo = document.querySelector('.logo');

const promise1 = () => {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!', 'message');
    });
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!', 'error-message'));
    }, 3000);
  });
};

const message = (text, className) => {
  const messageItem = document.createElement('div');

  messageItem.classList.add(className);
  messageItem.innerText = text;

  document.body.append(messageItem);
};

promise1()
  .then(message);

promise2()
  .catch(message);
