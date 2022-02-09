'use strict';

const body = document.querySelector('body');

function makeElement(elementClass, text) {
  const message = document.createElement('div');

  message.className = elementClass;
  message.innerText = text;

  return message;
}

const promise1 = () => new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve(makeElement('message', 'Promise was resolved!'));
  });
});

const promise2 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(makeElement('error-message', 'Promise was rejected!'));
  }, 3000);
});

function addElement(el) {
  body.append(el);
}

promise1().then(addElement);
promise2().catch(addElement);
