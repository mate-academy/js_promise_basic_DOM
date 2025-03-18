'use strict';

function anAction() {
  const logo = document.querySelector('.logo');
  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('logo clicked!');
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('rejected after 3 sec'));
    }, 3000);
  });

  promise1
    .then((message) => {
      createDiv('Promise was resolved!');
    })
    .catch((error) => {
      createDiv('Promise was rejected!', 'error-message', error);
    });

  promise2
    .then((message) => {})
    .catch((error) => {
      createDiv('Promise was rejected!', 'error-message', error);
    });

  function createDiv(message, nameOfClass) {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add(nameOfClass);
    div.textContent = message;
    document.querySelector('body').append(div);
  }
}

anAction();
