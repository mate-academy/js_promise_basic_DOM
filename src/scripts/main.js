'use strict';

const logo = document.querySelector('.logo');

function createElement(className, innerText) {
  const element = document.createElement('div');

  element.className = className;
  element.innerText = innerText;

  return element;
}

const promiseResolve = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    document.body.append(
      createElement('message', 'Promise was resolved!')
    );
    resolve();
  });
});

// eslint-disable-next-line no-console
promiseResolve.then(() => console.log('Promise was resolved'));

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    document.body.append(
      createElement('message error-message', 'Promise was rejected!')
    );
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// eslint-disable-next-line no-console
promiseReject.catch(error => console.log(error));
