'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const messageResolved = document.createElement('div');
const messageRejected = document.createElement('div');

messageResolved.classList.add('message');
messageResolved.innerText = 'Promise was resolved!';
messageRejected.classList.add('error-message');
messageRejected.innerText = 'Promise was rejected!';

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve(messageResolved);
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(messageRejected);
  }, 3000);
});

promise1.then(notification => {
  return body.append(notification);
});

promise2.catch(error => {
  return body.append(error);
});
