'use strict';

const bodyElement = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise1
  .then(() => {
    addNewElement();
  })
  .catch(() => {
    addErrorElement();
  });

promise2
  .then(() => {
    addNewElement();
  })
  .catch(() => {
    addErrorElement();
  });

function addNewElement() {
  const newElement = document.createElement('div');

  newElement.setAttribute('class', 'message');
  newElement.textContent = `Promise was resolved!`;

  bodyElement.appendChild(newElement);
}

function addErrorElement() {
  const newElement = document.createElement('div');

  newElement.setAttribute('class', 'message error-message');
  newElement.textContent = `Promise was rejected!`;

  bodyElement.appendChild(newElement);
}
