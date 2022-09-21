'use strict';

// write your code here
function createPromise1() {
  const logo = document.querySelector('.logo');

  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });
}

function createPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise was rejected!');
    }, 3000);
  });
}

const promise1 = createPromise1();
const promise2 = createPromise2();

promise1.then((result) => {
  const divResolve = document.createElement('div');

  divResolve.classList.add('message');
  divResolve.innerText = result;

  document.body.appendChild(divResolve);
})

promise2.catch((result) => {
  const divReject = document.createElement('div');

  divReject.classList.add('error-message');
  divReject.innerText = result;

  document.body.appendChild(divReject);
})
