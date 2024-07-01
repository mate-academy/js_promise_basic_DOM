'use strict';

const body = document.getElementsByTagName('body')[0];
const logo = document.getElementsByClassName('logo')[0];
const div = document.createElement('div');

const promise1 = async () => {
  try {
    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
  } catch {
    div.classList.add('message');
    div.classList.add('error-message');

    div.textContent = 'Promise was rejected!';
  } finally {
    body.appendChild(div);
  }
};

const promise2 = async () => {
  try {
    throw new Error();
  } catch {
    setTimeout(() => {
      div.classList.add('message');
      div.classList.add('error-message');

      div.textContent = 'Promise was rejected!';
      body.appendChild(div);
    }, 3000);
  }
};

logo.addEventListener('click', () => {
  promise1();
  promise2();
});
