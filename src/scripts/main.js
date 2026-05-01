'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('You clicked the logo!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function CreateMassage(message, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = message;
  document.body.appendChild(div);
}

promise1.then(() => CreateMassage('Promise was resolved!'));
promise2.catch(() => CreateMassage('Promise was rejected!', true));
