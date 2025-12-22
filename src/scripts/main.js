'use strict';

const logo = document.querySelector('.logo');
const div1 = document.createElement('div');
const div2 = document.createElement('div');

div1.classList.add('message');
div2.classList.add('message');


logo.addEventListener()

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  div1.textContent = 'Promise was resolved!';
  document.querySelector('body').append(div1);
});

promise1.catch(() => {
  div1.textContent = 'Promise was rejected!';
  document.querySelector('body').append(div1);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.then(() => {
  div2.textContent = 'Promise was resolved!';
  document.querySelector('body').append(div2);
});

promise2.catch(() => {
  div2.classList.add('error-message');
  div2.textContent = 'Promise was rejected!';
  document.querySelector('body').append(div2);
});
