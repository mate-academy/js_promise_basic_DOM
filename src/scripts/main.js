'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Rejected'));
  }, 3000);
});

const onSuccess = () => {
  const divElement = document.createElement('div');

  divElement.className = 'message';
  divElement.innerText = 'Promise was resolved!';
  document.body.appendChild(divElement);
};

const onFail = () => {
  const divElement = document.createElement('div');

  divElement.className = 'message error-message';
  divElement.innerText = 'Promise was rejected!';
  document.body.appendChild(divElement);
};

promise1
  .then(onSuccess)
  .catch(onFail);

promise2
  .then(onSuccess)
  .catch(onFail);
