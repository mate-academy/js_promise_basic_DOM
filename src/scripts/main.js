'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => resolve());
  } else {
    reject(new Error('Logo not found'));
  }
});

promise1.then(() => {
  const div1 = document.createElement('div');

  div1.classList.add('message');
  div1.textContent = 'Promise was resolved!';
  body.appendChild(div1);
});

promise1.catch(() => {
  const div2 = document.createElement('div');

  div2.classList.add('message');
  div2.classList.add('error-message');
  div2.textContent = 'Promise was rejected!';
  body.appendChild(div2);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout exceeded'));
  }, 3000);
});

promise2.then(() => {
  const div1 = document.createElement('div');

  div1.classList.add('message');
  div1.textContent = 'Promise was resolved!';
  body.appendChild(div1);
});

promise2.catch(() => {
  const div2 = document.createElement('div');

  div2.classList.add('message');
  div2.classList.add('error-message');
  div2.textContent = 'Promise was rejected!';
  body.appendChild(div2);
});
