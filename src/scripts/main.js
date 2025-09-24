'use strict';

const logo = document.querySelector('.logo');
const messageSuccess = document.createElement('div');

messageSuccess.className = 'message';
messageSuccess.innerText = 'Promise was resolved!';

const messageError = document.createElement('div');

messageError.className = 'message error-message';
messageError.innerText = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  document.body.append(messageSuccess);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.catch(() => {
  document.body.append(messageError);
});
