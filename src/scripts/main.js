'use strict';

// write your code here
const div = document.createElement('div');

const onSuccess = (message) => {
  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

const onError = (message) => {
  div.className = 'error-message';
  div.textContent = message;
  document.body.appendChild(div);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(onSuccess)
  .catch(onError);

promise2
  .then(onSuccess)
  .catch(onError);
