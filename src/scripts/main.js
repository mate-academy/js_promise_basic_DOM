'use strict';

const logo = document.querySelector('.logo');

const promiseOne = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promiseOne.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerHTML = 'Promise was resolved!';
  document.body.appendChild(div);
});

promiseTwo.catch(() => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.innerHTML = 'Promise was rejected!';
  document.body.appendChild(div);
});
