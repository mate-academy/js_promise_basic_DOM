'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function printMessage(className, text) {
  const div = document.createElement('div');

  div.className = `${className}`;
  div.textContent = `${text}`;

  document.body.append(div);
}

promise1.then((result) => {
  printMessage('message', result);
});

promise2.catch((error) => {
  printMessage('error-message message', error);
});
