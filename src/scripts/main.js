'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Щось пішло не так'));
  }, 3000);
});

promise1
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resloved!';
    document.body.appendChild(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });

promise2
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resloved!';
    document.body.appendChild(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });
