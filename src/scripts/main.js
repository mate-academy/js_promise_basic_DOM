'use strict';

function createTegs(className, text) {
  const p = document.createElement('p');

  p.setAttribute('class', className);
  p.innerHTML = text;
  document.body.append(p);
}

// eslint-disable-next-line no-unused-vars
const firstPromise = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    createTegs('message', 'Promise was resolved!');
    resolve('Resolve');
  });
}).then(data => {
  // eslint-disable-next-line no-console
  console.log(data);
});

// eslint-disable-next-line no-unused-vars
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    createTegs('message error-message', 'Promise was rejected!');

    const errorMessage = document.querySelector('.error-message');

    setTimeout(() => errorMessage.remove(), 2000);

    reject(new Error('Reject'));
  }, 3000);
}).catch(error => {
  // eslint-disable-next-line no-console
  console.log(error);
});
