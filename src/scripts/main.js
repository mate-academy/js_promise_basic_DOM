'use strict';

const logo = document.querySelector('.logo');
const body = document.body;
const div = document.createElement('div');

div.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(div);
  });
});

resultPromise(promise1);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(div);
  }, 3000);
});

resultPromise(promise2);

function resultPromise(promise) {
  return promise
    .then(elem => {
      elem.innerText = 'Promise was resolved!';
      body.append(elem);
    })
    .catch(elem => {
      elem.classList.add('error-message');
      elem.innerText = 'Promise was rejected!';
      body.append(elem);
    });
};
