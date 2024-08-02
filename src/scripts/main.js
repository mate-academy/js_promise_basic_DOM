'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((result) => {
  helper(result).className = 'message';
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 2400);
});

promise2.catch((error) => {
  helper(error).className = 'message error-message';
});

function helper(text) {
  const div = document.createElement('div');

  div.textContent = text;
  document.body.appendChild(div);

  return div;
}
