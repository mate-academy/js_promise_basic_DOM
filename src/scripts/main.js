'use strict';

const logo = document.getElementsByClassName('logo')[0];

const promise1 = new Promise((resolve, reject) => {
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode('Promise was resolved!');

  newDiv.className = 'message';
  newDiv.appendChild(newContent);

  const body = document.body;

  logo.addEventListener('click', () => {
    resolve(body.insertAdjacentElement('afterbegin', newDiv));
  });
});

const promise2 = new Promise((resolve, reject) => {
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode('Promise was rejected!');

  newDiv.className = 'message error-message';

  newDiv.appendChild(newContent);

  const body = document.body;

  setTimeout(() => {
    logo.addEventListener('click', () => {
      reject(body.insertAdjacentElement('afterbegin', newDiv));
    });
  }, 3000);
});

promise1.then((resolve) => resolve);
promise2.then((reject) => reject);

Promise.allSettled([
  promise1.then((resolve) => resolve),
  promise2.then((reject) => reject),
]);
