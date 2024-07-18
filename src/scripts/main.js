'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const success = () => {
  const div = document.createElement('div');

  div.classList.add('message');

  div.textContent = 'Promise was resolved!';

  body.appendChild(div);
};

const error = () => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');

  div.textContent = 'Promise was rejected!';

  body.appendChild(div);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(success).catch(error);
promise2.then(success).catch(error);
