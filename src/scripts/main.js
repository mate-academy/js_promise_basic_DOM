'use strict';

const logo = document.querySelector('.logo');

function createDiv(...classList) {
  const div = document.createElement('div');

  div.classList.add(...classList);

  return div;
}

function callbackPromise(data) {
  const classList = ['message'];

  if (data?.message) {
    classList.push('error-message');
  }

  const message = createDiv(...classList);

  message.innerHTML = data?.message ? data.message : data;
  document.body.append(message);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then(callbackPromise).catch(callbackPromise);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then(callbackPromise).catch(callbackPromise);
