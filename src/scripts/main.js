'use strict';

const body = document.querySelector('body');

const resolver = (resolve, reject) => {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
};

const rejecter = (resolve, reject) => {
  setTimeout(() => {
  reject('Promise was rejected!')}, 3000);
  };

const promise1 = new Promise(resolver);
const promise2 = new Promise(rejecter);

promise1.then(text => {
  const message = document.createElement('div');

  message.className = 'message';
  message.innerHTML = text;
  body.append(message);
});

promise2.catch(text => {
  const message = document.createElement('div');

  message.className = 'error-message';
  message.innerHTML = text;
  body.append(message);
});
