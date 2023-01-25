'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const addElement = (type, promiseResult) => {
  const div = document.createElement('div');

  div.className = `${type}`;
  div.textContent = `${promiseResult}`;

  body.append(div);
};

function toCheck(promise) {
  promise
    .then(result => {
      addElement('message', result);
    }).catch(result => {
      addElement('error-message', 'Promise was rejected!');
    });
};

toCheck(promise1);
toCheck(promise2);
