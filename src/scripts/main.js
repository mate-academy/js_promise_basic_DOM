'use strict';

// write your code here
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error!'));
  }, 3000);
});

promise1.then(succesFunc);
promise2.then(succesFunc).catch(errorFunc);

function succesFunc() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = 'Promise was resolved!';
  document.body.append(div);
}

function errorFunc() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.innerText = 'Promise was rejected!';
  document.body.append(div);
}
