/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';

console.log('request data...');

const firstPromise = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    console.log('preparing data...');

    const p = document.createElement('p');

    p.setAttribute('class', `message`);
    p.innerHTML = 'Promise was resolved!';
    document.body.append(p);

    resolve('Resolve');
  });
}).then(data => {
  console.log(data);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rejected = document.createElement('p');

    rejected.classList.add('message', 'error-message');
    rejected.innerHTML = 'Promise was rejected!';
    document.body.append(rejected);

    setTimeout(() => rejected.remove(), 2000);

    reject(new Error('Reject'));
  }, 3000);
}).catch(error => {
  console.log(error);
});
