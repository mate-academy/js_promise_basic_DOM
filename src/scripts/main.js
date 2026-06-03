'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document
    .querySelector('.logo')
    .addEventListener('click', () => resolve(), { once: true });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.className = 'message';

  div.textContent = 'Promise was resolved!';

  document.body.appendChild(div);
});

promise1.catch(() => {
  const div = document.createElement('div');

  div.className = 'message error-message';

  div.textContent = 'Promise was rejected!';

  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Timed out')), 3000);
});

promise2.then(() => {
  const div = document.createElement('div');

  div.className = 'message';

  div.textContent = 'Promise was resolved!';

  document.body.appendChild(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.className = 'message error-message';

  div.textContent = 'Promise was rejected!';

  document.body.appendChild(div);
});
