'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Problem was rejected!'));
  }, 3000);
});

promise1
  .then((message) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;

    document.body.appendChild(div);
  })
  .catch((e) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-messsage');
    div.textContent = 'Promise was rejected!';

    document.body.appendChild(div);
  });

promise2
  .then((message) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;

    document.body.appendChild(div);
  })
  .catch((e) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-messsage');
    div.textContent = 'Promise was rejected!';

    document.body.appendChild(div);
  });
