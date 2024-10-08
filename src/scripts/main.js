'use strict';

const logo = document.querySelector('.logo');

logo.style.cursor = 'pointer';

function createElement(message, isError = false) {
  const element = document.createElement('div');

  element.classList.add('message');

  if (isError) {
    element.classList.add('error-message');
  }

  element.textContent = message;
  document.body.appendChild(element);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((message) => createElement(message));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => createElement(error.message, true));
