'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', resolve);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('something bad happened'));
  }, 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
});

promise1.catch(() => {
  const message = document.createElement('div');

  message.classList.add('message error-message');
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
});

promise2.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
});
