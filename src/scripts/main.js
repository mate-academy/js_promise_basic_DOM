'use strict';

const logoBtn = document.querySelector('.logo');

const successHandler = (message) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message');
  div.textContent = message;

  const body = document.querySelector('body');

  body.append(div);
};

const errorHandler = (message) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message error-message');
  div.textContent = message;

  const body = document.querySelector('body');

  body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  logoBtn.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then(data => {
  successHandler(data);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(data => {
  errorHandler(data);
});
