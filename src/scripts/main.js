'use strict';

const promice1 = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.logo')) {
      return resolve();
    }
  });
}).then(() => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
});

const promice2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject();
  }, 3000);
}).catch(() => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList = 'message error-message';
  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
});
