'use strict';

const promise1 = new Promise(function(resolve, reject) {
  document.getElementById('.logo').addEventListener('click', resolve());
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(function secondPromise() {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line no-unused-expressions, no-sequences, brace-style, semi
    resolve(), 3000 });
},
);

promise1.then(() => {
  const divElement = document.createElement('div');

  divElement.className = 'message';
  divElement.innerText = 'Promise was resolved!';
});

promise2.catch(() => {
  const divElement = document.createElement('div');

  divElement.className = 'message error-message';
  divElement.innerText = 'Promise was rejected';
});
