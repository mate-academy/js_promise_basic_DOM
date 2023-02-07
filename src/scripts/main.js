'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const createMessage = (value, className) => {
  const div = document.createElement('div');

  div.innerText = value;
  div.className = className;
  document.body.append(div);
};

promise1.then((value) => {
  createMessage(value, 'message');
});

promise2.catch(value => {
  createMessage(value, 'error-message');
});
