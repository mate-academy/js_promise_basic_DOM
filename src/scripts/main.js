'use strict';

const logo = document.getElementById('logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((result) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = result;
    document.body.append(div);
  })
  .catch(error => {
    const div = document.createElement('div');

    div.classList.add('error-message');
    div.textContent = error;
    document.body.append(div);
  });

promise2
  .then((result) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = result;
    document.body.append(div);
  })
  .catch(error => {
    const div = document.createElement('div');

    div.classList.add('error-message');
    div.textContent = error;
    document.body.append(div);
  });
