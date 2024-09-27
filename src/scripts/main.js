'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(onFulfilled, onRejected);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(onFulfilled, onRejected);

function onFulfilled(result) {
  document.body.insertAdjacentHTML('beforeend', `
 <div class="message">${result}</div>
 `);
};

function onRejected(result) {
  document.body.insertAdjacentHTML('beforeend', `
 <div class="message error-message">${result.toString().slice(6)}</div>
 `);
};
