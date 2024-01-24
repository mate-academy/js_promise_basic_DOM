'use strict';

// write your code here
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const button = document.querySelector('.logo');

  button.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const onSuccess = (message) => {
  const mes = document.createElement('div');

  mes.className = 'message';
  mes.innerText = message;

  body.appendChild(mes);
};

const onError = (message) => {
  const mes = document.createElement('div');

  mes.className = 'message error-message';
  mes.innerText = message;

  body.appendChild(mes);
};

promise1
  .then(onSuccess)
  .catch(onError);

promise2
  .then(onSuccess)
  .catch(onError);
