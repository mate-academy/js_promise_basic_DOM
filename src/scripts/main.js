'use strict';

function createPromise1(button, message) {
  return new Promise((resolve, reject) => {
    button.addEventListener('click', first);

    function first(e) {
      resolve();
      button.removeEventListener('click', first);
    }

    setTimeout(() => {
      reject(message);
    }, 3000);
  });
}

function createPromise2(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(message);
    }, 3000);
  });
}

const button1 = document.querySelector('.logo');

function createMessage(className, text) {
  const element = document.createElement('div');

  element.className = className;
  element.innerHTML = text;
  document.body.append(element);
}

const promise1 = createPromise1(button1, 'Error');
const promise2 = createPromise2('Error');

promise1.then(() => {
  createMessage('message', 'Promise was resolved');
}).catch(() => {
  createMessage('error-message', 'Promise was rejected');
});

promise2.catch(() => {
  createMessage('error-message', 'Promise was rejected');
});
