'use strict';

const logo = document.querySelector('.logo');

logo.style.cursor = 'pointer';

const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const ifResolve = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
};

const ifReject = () => {
  const div = document.createElement('div');

  div.className = 'error-message';
  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
};

promise1.then(ifResolve).catch(ifReject);
promise2.then(ifResolve).catch(ifReject);
