'use strict';

function createElem(type) {
  const resolveText = 'Promise was resolved!';
  const rejectText = 'Promise was rejected!';
  const elem = document.createElement('div');

  elem.textContent = type === 'resolve' ? resolveText : rejectText;
  elem.classList.add('message');

  if (type === 'reject') {
    elem.classList.add('error-message');
  }

  document.body.append(elem);
}

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(() => createElem('resolve'));
promise1.catch(() => createElem('reject'));

promise2.then(() => createElem('resolve'));
promise2.catch(() => createElem('reject'));
