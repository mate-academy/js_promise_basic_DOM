'use strict';

const logo = document.querySelector('.logo');

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

firstPromise
  .then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Some reason'));
  }, 3000);
});

secondPromise
  .then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });
