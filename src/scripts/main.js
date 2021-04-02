'use strict';

// eslint-disable-next-line no-unused-vars
const firstPromise = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    // eslint-disable-next-line no-console
    console.log('preparing data...');

    const p = document.createElement('p');

    p.setAttribute('class', `message`);
    p.innerHTML = 'Promise was resolved!';
    document.body.append(p);

    resolve('Resolve');
  });
}).then(data => {
  // eslint-disable-next-line no-console
  console.log(data);
});

// eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line no-console
  console.log(error);
});
