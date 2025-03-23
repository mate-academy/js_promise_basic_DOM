'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const prom1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

prom1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function handleError() {
  const div2 = document.createElement('div');

  div2.classList.add('message');
  div2.classList.add('error-message');
  div2.textContent = 'Promise was rejected!';

  body.appendChild(div2);
}

prom2.catch((error) => {
  handleError(error);
});
