'use strict';

// write your code here
const logo = document.querySelector('.logo');

function createPromise(isResolved) {
  return new Promise((resolve, reject) => {
    if (isResolved) {
      resolve('Promise was resolved!');
    } else {
      setTimeout(() => {
        reject(new Error('Promise was rejected!'));
      }, 2000);
    };
  });
}

function handlePromiseResult(result, text) {
  const div = document.createElement('div');

  div.classList.add(result === 'resolve' ? 'message' : 'error-message');
  div.innerText = text;
  document.body.append(div);
}

createPromise(true)
  .then(result => {
    logo.addEventListener('click', () => {
      handlePromiseResult('resolve', result);
    });
  });

createPromise(false)
  .catch(error => {
    handlePromiseResult('reject', error);
  });
