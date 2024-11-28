'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve(['Promise was resolved!', ['message']]);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(['Promise was rejected!', ['message', 'error-message']]);
  }, 3000);
});

function handler(args) {
  const text = args[0];
  const classes = args[1];

  const newDiv = document.createElement('div');

  newDiv.textContent = text;
  newDiv.classList.add(...classes);
  document.querySelector('body').appendChild(newDiv);
}

promise1.then(handler).catch(handler);
promise2.then(handler).catch(handler);
