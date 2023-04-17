'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.innerText = 'Promise was resolved!';
    document.body.append(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'error-message';
    div.innerText = 'Promise was rejected!';
    document.body.append(div);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const er = 'Promise was rejected!';

    reject(er);
  }, 3000);
});

promise2
  .then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.innerText = 'Promise was resolved!';
    document.body.append(div);
  })
  .catch((er) => {
    const div = document.createElement('div');

    div.className = 'error-message';
    div.innerText = er;
    document.body.append(div);
  });
