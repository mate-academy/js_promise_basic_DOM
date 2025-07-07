'use strict';

const SUCCESS_MESSAGE = 'Promise was resolved!';
const ERROR_MESSAGE = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(ERROR_MESSAGE);

    return;
  }

  const handleClick = () => {
    resolve(SUCCESS_MESSAGE);

    logo.removeEventListener('click', handleClick);
  };

  logo.addEventListener('click', handleClick);
});

const promise2 = new Promise((resolve, reject) => {
  const id = setInterval(() => {
    reject(ERROR_MESSAGE);
    clearInterval(id);
  }, 3000);
});

const appendMessage = (value, resType = 'resolve') => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('message');

  if (resType === 'reject') {
    div.classList.add('error-message');
  }

  div.textContent = value;

  body.appendChild(div);
};

promise1.then(appendMessage).catch((value) => appendMessage(value, 'reject'));

promise2.then(appendMessage).catch((value) => appendMessage(value, 'reject'));
