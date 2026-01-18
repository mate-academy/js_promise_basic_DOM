'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve({ logo, message: 'Promise was resolved!' });
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3e3);
});

promise1.then(({ logo, message }) => {
  const divSucceed = Object.assign(document.createElement('div'), {
    className: 'message',
    innerText: message,
  });

  document.body.append(divSucceed);
});

promise2.catch((reason) => {
  const divFail = document.createElement('div');

  divFail.className = 'message error-message';
  divFail.innerText = reason.message;

  document.body.append(divFail);
});
