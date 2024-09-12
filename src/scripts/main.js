'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('h1');

  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.textContent = `Promise was resolved!`;
    div.classList.add('message');
    document.body.append(div);
    resolve(div);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const div = document.createElement('div');

    div.textContent = `Promise was rejected!`;
    div.classList.add('error-message');
    reject(div);
  }, 3000);
});

promise1.then(data => {
  document.body.append(data);
});

promise2.catch(data => {
  document.body.append(data);
});
