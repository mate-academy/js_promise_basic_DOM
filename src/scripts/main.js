'use strict';

// write your code here
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  appendMessage('success');
});

promise1.catch(() => {
  appendMessage('error');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error')), 3000);
});

promise2.then(() => appendMessage('success'));
promise2.catch(() => appendMessage('error'));

function appendMessage(type) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (type === 'error') {
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
  } else {
    div.textContent = 'Promise was resolved!';
  }
  document.body.appendChild(div);
}
