'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(result => printMessage(result, true));
promise2.catch(error => printMessage(error, false));

function printMessage(message, result) {
  const messageForPrint = document.createElement('div');

  messageForPrint.innerText = message;

  result
    ? messageForPrint.classList.add('message')
    : messageForPrint.classList.add('error-message');

  document.body.append(messageForPrint);
}
