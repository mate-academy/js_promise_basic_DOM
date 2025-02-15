'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  const textResolve = document.createElement('div');

  textResolve.setAttribute('class', 'message');
  textResolve.textContent = 'Promise was resolved!';

  logo.addEventListener('click', () => {
    resolve(textResolve);
  });
});

const promise2 = new Promise((resolve, reject) => {
  const textReject = document.createElement('div');

  textReject.setAttribute('class', 'message error-message');
  textReject.textContent = 'Promise was rejected!';

  setTimeout(() => {
    reject(textReject);
  }, 3000);
});

promise1.then((textResolved) => document.body.append(textResolved));
promise2.catch((textRejected) => document.body.append(textRejected));
