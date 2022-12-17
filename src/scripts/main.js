'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function createPromise() {
  const resolver = (resolved, canceled) => {
    logo.addEventListener('click', () => {
      resolved();
    });

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

const promise1 = createPromise();
const promise2 = createPromise();

promise1.then(() => {
  showMessage('message', 'Promise was resolved!');
}, null);

promise2.then(null, () => {
  showMessage('error-message', 'Promise was rejected!');
});
