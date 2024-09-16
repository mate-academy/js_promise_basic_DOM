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

function createNotification() {
  const message = document.createElement('div');

  body.appendChild(message);
  message.classList.add('message');

  return message;
}

function createError(error) {
  const message = createNotification();

  message.textContent = error;
  message.classList.add('error-message');
}

function createSuccess(res) {
  const message = createNotification();

  message.textContent = res;
}

const promise1 = createPromise1();

promise1
  .then(res => {
    createSuccess(res);
  })
  .catch(error => {
    createError(error);
  });

const promise2 = createPromise2();

promise2
  .catch(error => {
    createError(error);
  });
