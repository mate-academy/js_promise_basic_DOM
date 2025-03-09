'use strict';

const logo = document.querySelector('.logo');
const divElement = document.createElement('div');

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

function printMessage(text, isError = false) {
  divElement.innerText = text;
  divElement.classList.add('message');
  document.body.appendChild(divElement);

  if (isError) {
    divElement.classList.add('error-message');
  }
}

promise1.then((text) => {
  printMessage(text);
});

promise2.catch((error) => {
  printMessage(error, true);
});
