'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const showMessage = (raport) => {
  const messageDiv = document.createElement('div');
  const errorInstance = raport instanceof Error;

  messageDiv.className = errorInstance ? 'message error-message' : 'message';
  messageDiv.textContent = errorInstance ? raport.message : raport;
  document.body.appendChild(messageDiv);
};

promise1.then(showMessage).catch(showMessage);
promise2.then(showMessage).catch(showMessage);
