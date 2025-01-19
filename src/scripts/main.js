'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((result) => {
  const div = document.createElement('div');

  div.innerText = result;

  div.setAttribute('class', 'message');
  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then(
  (result) => alert(result),

  (error) => {
    const div = document.createElement('div');

    div.innerText = error.message;

    div.setAttribute('class', 'message error-message');
    document.body.appendChild(div);
  },
);
//
