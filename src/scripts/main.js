'use strict';

// write your code here

const logo = document.querySelector('.logo');

const message = (className, text) => {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;
  document.body.append(div);
};

const promise1 = () => {
  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
};

promise1()
  .then(result => message('message', result))
  .catch(error => message('error-message', error));

promise2()
  .then(result => message('message', result))
  .catch(error => message('error-message', error));
