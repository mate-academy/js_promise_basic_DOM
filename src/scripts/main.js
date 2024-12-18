'use strict';

const logo = document.getElementsByClassName('logo')[0];
const div = document.createElement('div');

document.body.appendChild(div);

const resolvedMessage = 'Promise was resolved!';
const rejectionMessage = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(resolvedMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(rejectionMessage);
  }, 3000);
});

const promiseResolve = (message) => {
  div.textContent = message;
};

const promiseReject = (message) => {
  div.textContent = message;
};

promise1.then(promiseResolve).catch(promiseReject);
promise2.then(promiseResolve).catch(promiseReject);
