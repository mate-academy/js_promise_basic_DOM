'use strict';

// write your code here
const divFirst = document.createElement('div');
const divSecond = document.createElement('div');
const body = document.querySelector('body');
const logoButton = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logoButton.addEventListener('click', () => {
    resolve('resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
});

promise1.then(success => {
  return onSuccess(success);
})
  .catch(error => {
    return onError(error);
  });

promise2.then(success => {
  return onSuccess(success);
})
  .catch(error => {
    return onError(error);
  });

function onSuccess(success) {
  divFirst.classList = 'message';
  divFirst.innerHTML = `Promise was ${success}!`;
  body.append(divFirst);
}

function onError(error) {
  divSecond.classList = 'error-message';
  divSecond.innerHTML = `${error}`;
  body.append(divSecond);
}
