'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  printInfo('', 'Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise2.catch(() => {
  printInfo('error-message', 'Promise was rejected!');
});

function printInfo(className = '', content) {
  const div = document.createElement('div');

  div.className = `message ${className}`;
  div.textContent = `${content}`;
  document.body.append(div);
}
