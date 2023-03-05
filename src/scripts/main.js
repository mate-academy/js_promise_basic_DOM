'use strict';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.classList.add('message');

    div.innerHTML = 'Promise was resolved!';

    body.append(div);

    resolve();
  });
});

promise1.then(success => success);

const promise2 = new Promise((resolve, reject) => {
  const div = document.createElement('div');

  div.classList.add('error-message');

  div.innerHTML = 'Promise was rejected!';

  body.append(div);

  setTimeout(() => reject, 3000);
});

promise2.catch(error => error);
