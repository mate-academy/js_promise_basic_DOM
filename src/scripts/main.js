'use strict';

// Promise 1 — виконується при кліку на .logo
const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    return;
  }

  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

// Promise 2 — відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise timed out after 3 seconds'));
  }, 3000);
});

// Обробники для promise1
promise1
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

// Обробники для promise2
promise2
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
