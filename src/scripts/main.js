'use strict';

// write your code here
const logo = document.querySelector('.logo');
const successMeassage = document.createElement('div');
const errorMessage = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

function addMessage(message, promiseResult, classList1) {
  message.textContent = promiseResult;
  document.body.appendChild(message);
  message.classList.add(...classList1);
}

promise1.then((result) => {
  addMessage(successMeassage, result, ['message']);
});

promise2.catch((error) => {
  addMessage(errorMessage, error.message, ['message', 'error-message']);
});
