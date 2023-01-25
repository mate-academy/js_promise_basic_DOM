'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function createPromise1() {
  const resolver = (success, error) => {
    body.addEventListener('click', e => {
      if (e.target === logo) {
        success('Promise was resolved!');
      } else {
        error('Promise was rejected!');
      }
    });
  };

  return new Promise(resolver);
}

function createPromise2() {
  const resolver = (success, error) => {
    setTimeout(() => {
      error('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise1();

promise1
  .then(res => {
    const message = document.createElement('div');

    body.appendChild(message);
    message.textContent = res;
    message.classList.add('message');
  })
  .catch(error => {
    const message = document.createElement('div');

    body.appendChild(message);
    message.textContent = error;
    message.classList.add('message');
    message.classList.add('error-message');
  });

const promise2 = createPromise2();

promise2
  .catch(error => {
    const message = document.createElement('div');

    body.appendChild(message);
    message.textContent = error;
    message.classList.add('message');
    message.classList.add('error-message');
  });
