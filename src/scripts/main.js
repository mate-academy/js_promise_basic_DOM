'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function promise1() {
  const resolver = (resolved, canceled) => {
    logo.addEventListener('click', () => {
      resolved();
    });
  };

  return new Promise(resolver);
}

function promise2() {
  const resolver = (resolved, canceled) => {
    setTimeout(() => {
      canceled();
    }, 3000);
  };

  return new Promise(resolver);
}

const showMessage = (type, text) => {
  const seccessMessage = document.createElement('div');

  seccessMessage.className = type;
  seccessMessage.textContent = text;
  body.append(seccessMessage);
};

const firstPromise = promise1();
const secondPromise = promise2();

firstPromise.then(() => {
  showMessage('message', 'Promise was resolved!');
}, null);

secondPromise.then(null, () => {
  showMessage('error-message', 'Promise was rejected!');
});
