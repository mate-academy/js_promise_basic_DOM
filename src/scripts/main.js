'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    if (e.target === logo) {
      resolve();
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise timed out after 3 seconds'));
  }, 3000);
});

// Success and error handlers for promise1
promise1
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });

// Success and error handlers for promise2
promise2
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });
