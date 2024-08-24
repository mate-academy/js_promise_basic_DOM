'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function addElement(classNames, text) {
  const newDiv = document.createElement('div');

  for (const className of classNames) {
    newDiv.classList.add(className);
  }
  newDiv.textContent = text;

  body.appendChild(newDiv);
}

promise1.then(() => {
  addElement(['message'], 'Promise was resolved!');
});

promise2.catch((error) => {
  addElement(['message', 'error-message'], error.message);
});
