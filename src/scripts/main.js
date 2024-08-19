'use strict';

const promises1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

function createElement(message, className) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = message;
  document.body.append(div);
}

const promises2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promises1.then(() => {
  createElement('Promise was resolved!', 'message');
});

promises2.catch((error) => {
  createElement(error.message, 'message error-message');
});
