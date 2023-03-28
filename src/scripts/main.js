'use strict';

function createPromise1(button) {
  return new Promise((resolve) => {
    button.addEventListener('click', first);

    function first() {
      resolve();
      button.removeEventListener('click', first);
    }
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

const promise1 = createPromise1(button1);
const promise2 = createPromise2('Error');

promise1.then(() => {
  createMessage('message', 'Promise was resolved');
});

promise2.catch(() => {
  createMessage('error-message', 'Promise was rejected');
});
