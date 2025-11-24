'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => {
    createMessage('success');
  })
  .catch(() => {
    createMessage('error');
  });

promise2
  .then(() => {
    createMessage('success');
  })
  .catch(() => {
    createMessage('error');
  });

function createMessage(type) {
  const div = document.createElement('div');

  if (type === 'success') {
    div.classList.add('message');
    div.innerText = 'Promise was resolved!';
  }

  if (type === 'error') {
    div.classList.add('message', 'error-message');
    div.innerText = 'Promise was rejected!';
  }

  document.body.appendChild(div);
}
