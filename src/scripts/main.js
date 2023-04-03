'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const error = () => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.innerText = `Promise was rejected!`;

  document.body.appendChild(div);
};

const success = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = `Promise was resolved!`;

  document.body.appendChild(div);
};

promise1.then(() => {
  success();
}).catch(() => {
  error();
});

promise2.then().catch(() => {
  error();
});
